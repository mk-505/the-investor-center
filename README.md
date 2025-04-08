# 📈 Investor Center

Investor Center is a full-stack web application that empowers users with real-time stock prediction insights and financial guidance using deep learning models and a GPT-powered chatbot. Combining modern web technologies with cutting-edge machine learning, this platform aims to enhance investor decision-making with a responsive interface and smart backend processing.

## 🚀 Features

- **Modern Frontend**: Built with React and styled using Tailwind CSS for a sleek, responsive design.
- **Robust Backend**: Flask server that handles data processing, model inference, and API communication.
- **Stock Prediction Models**:
  - Long Short-Term Memory (LSTM) model with 80% accuracy
  - Bi-directional LSTM model with 76% accuracy
- **NY Stock Exchange Data**: Time series models are trained using real-world NYSE data.
- **GPT-3.5 Chatbot**: Integrated via Hugging Face to answer company-specific financial queries and provide real-time insights.
- **Visualization**: Predicted stock trends are displayed through dynamic graphs.
  
## 🧠 AI Models

- `lstm_model.weights.h5`  
- `bi_stacked_concat_model.weights.h5`

These models are trained to forecast future stock price movements based on historical stock data.

## 🗃️ Folder Structure

```
investor-center/
│
├── __pycache__/                  # Compiled Python files
├── images/                      # Static image assets
├── new_york_stock_exchange/    # Contains NYSE dataset files and utilities
├── App.js                       # Main React component
├── App.css / index.css          # Styling
├── app.py                       # Flask backend entry point
├── stock_prediction_model.py    # Model loading & inference logic
├── predicted_stock_graph.png    # Example prediction output
├── *.weights.h5                 # Saved deep learning models
├── *.test.js / setupTests.js    # Test files
└── reportWebVitals.js           # React performance monitoring
```

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/investor-center.git
cd investor-center
```

### 2. Install Frontend Dependencies

```bash
cd frontend  # if React app is in a separate folder
npm install
npm start
```

### 3. Set Up the Flask Backend

```bash
pip install -r requirements.txt
python app.py
```

Make sure to place your model `.h5` files in the correct directory.

## 📊 Example Output

![Prediction Graph](./predicted_stock_graph.png)

## 🤖 Chatbot Demo

Ask questions like:
> "What is the future outlook of AAPL?"  
> "Show me the latest news on Tesla."

Responses are powered by GPT-3.5 through Hugging Face.

## 📚 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Flask
- **ML**: TensorFlow/Keras (LSTM, Bi-LSTM), GPT-3.5 via Hugging Face
- **Visualization**: Matplotlib / Plotly

## 🙌 Acknowledgments

- Hugging Face for GPT-3.5 integration
- NYSE data from Kaggle or other public datasets

## 📬 Contact

Built with 💼 by Manroop Kalsi & Shaun Arulanandam.

