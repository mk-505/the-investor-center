from flask import Flask, request, jsonify, send_file
from transformers import pipeline, set_seed
from flask_cors import CORS
import stock_prediction_model  # Import your stock prediction model module

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes

# Load the text generation pipeline using the GPT-2 model
generator = pipeline('text-generation', model='gpt2-medium')

# Set seed for reproducibility
set_seed(42)

# Adjust the parameters for text generation
MAX_LENGTH = 150
NUM_RETURN_SEQUENCES = 1


@app.route('/company_info', methods=['POST'])
def get_company_info():
    try:
        # Get company name from request JSON
        company_name = request.json.get('company')

        # Construct input prompt
        input_prompt = f"I'm going to provide you with information on the company {company_name}: "

        # Generate text
        output = generator(input_prompt, max_length=MAX_LENGTH, num_return_sequences=NUM_RETURN_SEQUENCES)

        # Extract generated sequences
        generated_sequences = [seq['generated_text'].strip() for seq in output]

        # Assemble response
        response_data = {
            'company_info': generated_sequences[0],  # Take only the first generated sequence
        }

        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({'error': f'Failed to generate company information: {str(e)}'}), 500

@app.route('/stock_prediction', methods=['GET'])
def get_stock_prediction():
    try:
        # Get ticker from request parameters
        ticker = request.args.get('ticker')

        # Plot stock predictions for the given ticker
        stock_prediction_model.plot_stock_predictions(ticker)

        # Send the generated graph file to the client
        return send_file('predicted_stock_graph.png', mimetype='image/png')

    except Exception as e:
        return jsonify({'error': f'Failed to generate stock prediction: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)
