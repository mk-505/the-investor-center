import React, { useState, useEffect } from 'react';
import './App.css';
import goldCoin from './images/gold_coin.png'; // Import the image
import wolfy from './images/wolfy.png'; // Import the new image

const tickers = ['A', 'AAL', 'AAP', 'AAPL', 'ABBV', 'ABC', 'ABT', 'ACN', 'ADBE', 'ADI', 'ADM', 'ADP', 'ADS', 'ADSK', 'AEE', 'AEP', 'AES', 'AET', 'AFL', 'AGN', 'AIG', 'AIV', 'AIZ', 'AJG', 'AKAM', 'ALB', 'ALK', 'ALL', 'ALLE', 'ALXN', 'AMAT', 'AME', 'AMG', 'AMGN', 'AMP', 'AMT', 'AMZN', 'AN', 'ANTM', 'AON', 'APA', 'APC', 'APD', 'APH', 'ARNC', 'ATVI', 'AVB', 'AVGO', 'AVY', 'AWK', 'AXP', 'AYI', 'AZO', 'BA', 'BAC', 'BAX', 'BBBY', 'BBT', 'BBY', 'BCR', 'BDX', 'BEN', 'BHI', 'BIIB', 'BK', 'BLK', 'BLL', 'BMY', 'BSX', 'BWA', 'BXP', 'C', 'CA', 'CAG', 'CAH', 'CAT', 'CB', 'CBG', 'CBS', 'CCI', 'CCL', 'CELG', 'CERN', 'CF', 'CFG', 'CHD', 'CHK', 'CHRW', 'CHTR', 'CI', 'CINF', 'CL', 'CLX', 'CMA', 'CMCSA', 'CME', 'CMG', 'CMI', 'CMS', 'CNC', 'CNP', 'COF', 'COG', 'COH', 'COL', 'COO', 'COP', 'COST', 'COTY', 'CPB', 'CRM', 'CSCO', 'CSRA', 'CSX', 'CTAS', 'CTL', 'CTSH', 'CTXS', 'CVS', 'CVX', 'CXO', 'D', 'DAL', 'DD', 'DE', 'DFS', 'DG', 'DGX', 'DHI', 'DHR', 'DIS', 'DISCA', 'DISCK', 'DLPH', 'DLR', 'DLTR', 'DNB', 'DOV', 'DOW', 'DPS', 'DRI', 'DTE', 'DUK', 'DVA', 'DVN', 'EA', 'EBAY', 'ECL', 'ED', 'EFX', 'EIX', 'EL', 'EMN', 'EMR', 'ENDP', 'EOG', 'EQIX', 'EQR', 'EQT', 'ES', 'ESRX', 'ESS', 'ETFC', 'ETN', 'ETR', 'EVHC', 'EW', 'EXC', 'EXPD', 'EXPE', 'EXR', 'F', 'FAST', 'FB', 'FBHS', 'FCX', 'FDX', 'FE', 'FFIV', 'FIS', 'FISV', 'FITB', 'FL', 'FLIR', 'FLR', 'FLS', 'FMC', 'FOX', 'FOXA', 'FRT', 'FSLR', 'FTI', 'FTR', 'FTV', 'GD', 'GE', 'GGP', 'GILD', 'GIS', 'GLW', 'GM', 'GOOG', 'GOOGL', 'GPC', 'GPN', 'GPS', 'GRMN', 'GS', 'GT', 'GWW', 'HAL', 'HAR', 'HAS', 'HBAN', 'HBI', 'HCA', 'HCN', 'HCP', 'HD', 'HES', 'HIG', 'HOG', 'HOLX', 'HON', 'HP', 'HPE', 'HPQ', 'HRB', 'HRL', 'HRS', 'HSIC', 'HST', 'HSY', 'HUM', 'IBM', 'ICE', 'IDXX', 'IFF', 'ILMN', 'INTC', 'INTU', 'IP', 'IPG', 'IR', 'IRM', 'ISRG', 'ITW', 'IVZ', 'JBHT', 'JCI', 'JEC', 'JNJ', 'JNPR', 'JPM', 'JWN', 'K', 'KEY', 'KHC', 'KIM', 'KLAC', 'KMB', 'KMI', 'KMX', 'KO', 'KORS', 'KR', 'KSS', 'KSU', 'L', 'LB', 'LEG', 'LEN', 'LH', 'LKQ', 'LLL', 'LLTC', 'LLY', 'LMT', 'LNC', 'LNT', 'LOW', 'LRCX', 'LUK', 'LUV', 'LVLT', 'LYB', 'M', 'MA', 'MAA', 'MAC', 'MAR', 'MAS', 'MAT', 'MCD', 'MCHP', 'MCK', 'MCO', 'MDLZ', 'MDT', 'MET', 'MHK', 'MJN', 'MKC', 'MLM', 'MMC', 'MMM', 'MNK', 'MNST', 'MO', 'MON', 'MOS', 'MPC', 'MRK', 'MRO', 'MSFT', 'MSI', 'MTB', 'MTD', 'MU', 'MUR', 'MYL', 'NAVI', 'NBL', 'NDAQ', 'NEE', 'NEM', 'NFLX', 'NFX', 'NI', 'NKE', 'NLSN', 'NOC', 'NOV', 'NRG', 'NSC', 'NTAP', 'NTRS', 'NUE', 'NVDA', 'NWL', 'NWS', 'NWSA', 'O', 'OKE', 'OMC', 'ORCL', 'ORLY', 'OXY', 'PAYX', 'PBCT', 'PBI', 'PCAR', 'PCG', 'PCLN', 'PDCO', 'PEG', 'PEP', 'PFE', 'PFG', 'PG', 'PGR', 'PH', 'PHM', 'PKI', 'PLD', 'PM', 'PNC', 'PNR', 'PNW', 'PPG', 'PPL', 'PRGO', 'PRU', 'PSA', 'PSX', 'PVH', 'PWR', 'PX', 'PXD', 'PYPL', 'QCOM', 'QRVO', 'R', 'RAI', 'RCL', 'REGN', 'RF', 'RHI', 'RHT', 'RIG', 'RL', 'ROK', 'ROP', 'ROST', 'RRC', 'RSG', 'RTN', 'SBUX', 'SCG', 'SCHW', 'SE', 'SEE', 'SHW', 'SIG', 'SJM', 'SLB', 'SLG', 'SNA', 'SNI', 'SO', 'SPG', 'SPGI', 'SPLS', 'SRCL', 'SRE', 'STI', 'STT', 'STX', 'STZ', 'SWK', 'SWKS', 'SWN', 'SYF', 'SYK', 'SYMC', 'SYY', 'T', 'TAP', 'TDC', 'TDG', 'TEL', 'TGNA', 'TGT', 'TIF', 'TJX', 'TMK', 'TMO', 'TRIP', 'TROW', 'TRV', 'TSCO', 'TSN', 'TSO', 'TSS', 'TWX', 'TXN', 'TXT', 'UAA', 'UAL', 'UDR', 'UHS', 'ULTA', 'UNH', 'UNM', 'UNP', 'UPS', 'URBN', 'URI', 'USB', 'UTX', 'V', 'VAR', 'VFC', 'VIAB', 'VLO', 'VMC', 'VNO', 'VRSK', 'VRSN', 'VRTX', 'VTR', 'VZ', 'WAT', 'WBA', 'WDC', 'WEC', 'WFC', 'WFM', 'WHR', 'WLTW', 'WM', 'WMB', 'WMT', 'WRK', 'WU', 'WY', 'WYN', 'WYNN', 'XEC', 'XEL', 'XL', 'XLNX', 'XOM', 'XRAY', 'XRX', 'XYL', 'YHOO', 'YUM', 'ZBH', 'ZION', 'ZTS']; // Example tickers

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const [companyInfo, setCompanyInfo] = useState('');
  const [stockGraph, setStockGraph] = useState(null);
  const [tickerInput, setTickerInput] = useState('');

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = (e) => {
    const dollarSign = document.createElement('span');
    dollarSign.textContent = '$';
    dollarSign.className = 'dollar-sign';
    dollarSign.style.left = e.pageX + 'px';
    dollarSign.style.top = e.pageY + 'px';
    document.body.appendChild(dollarSign);

    setTimeout(() => {
      document.body.removeChild(dollarSign);
    }, 500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const companyName = event.target.elements.companyName.value;

    try {
      const response = await fetch('http://127.0.0.1:5000/company_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company: companyName }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch company information');
      }

      const data = await response.json();
      console.log('Response from server:', data);
      setCompanyInfo(data.company_info);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFetchStockGraph = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/stock_prediction?ticker=${tickerInput}`);
      if (!response.ok) {
        throw new Error('Failed to fetch stock prediction');
      }
      const graphBlob = await response.blob();
      setStockGraph(URL.createObjectURL(graphBlob));
    } catch (error) {
      console.error('Error fetching stock graph:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header bg-gray-800 text-white p-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <img src={goldCoin} alt="Gold Coin" className="header-image" />
          <h1 className="text-lg font-semibold ml-2" style={{ marginLeft: 'calc(50px)' }}>The Investor Center</h1>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={() => scrollToSection('about-us')}>About Us</button>
          <button onClick={() => scrollToSection('background-info')}>Background Info</button>
          <button onClick={() => scrollToSection('stock-data')}>Stock Data</button>
        </div>
      </header>

      <section id="about-us" className="p-8 min-h-screen bg-custom-aboutus">
        <h2 className="text-2xl font-bold mb-4 section-title">About Us</h2>
        <div className="about-us-container bg-white p-6 shadow-md rounded-md">
          <img src={wolfy} alt="About Us" className="about-us-image" />
          <div className="about-us-text">
            <p>Welcome to our project! We are first-year Engineering Science students from the University of Toronto, Class of 2027, currently spending our summer in Thailand for research as part of the ESROP Global program. Amidst our research activities, we embarked on a fun weekend side project to learn full-stack development.

            Our journey into this project began just a few days ago after watching the movie Wolf of Wall Street. Inspired by the film, we decided to create a web application that leverages AI to provide insights into companies and predict stock trends.

            In this web app, users can input a company name, and using the GPT-2 model, it will generate background information about the company. While the output might not be perfect, it’s functional and serves as a proof of concept for our AI capabilities.

            Additionally, we have integrated LSTM and bi-directional LSTM models to generate stock trend predictions. When a user inputs a company's ticker, our app generates a graph that shows the predicted stock trends using both models. Though the predictions are sometimes accurate, this part of the project showcases our efforts in machine learning and data visualization.

            Thank you for visiting our site, and we hope you enjoy exploring our project as much as we enjoyed building it! 
            </p>
            <p>~ Manroop & Shaun ☺</p>

          </div>
        </div>
      </section>

      <section id="background-info" className="p-8 min-h-screen bg-custom-background">
        <h2 className="section-title text-2xl font-bold mb-4">Background Info</h2>
        <form onSubmit={handleSubmit}>
          <p>Please enter the company name:</p>
          <input type="text" name="companyName" className="border p-2 mt-2 w-full" placeholder="Company Name" />
          <button type="submit" className="bg-custom-submit text-white px-4 py-2 mt-4 rounded">Submit</button>
        </form>
        {companyInfo && (
          <div className="mt-4">
            <h3 className="text-lg font-bold company-info">Company Information:</h3>
            <p className="generated-text">{companyInfo}</p>
          </div>
        )}
      </section>

      <section id="stock-data" className="p-8 min-h-screen bg-custom-stock">
        <h2 className="section-title text-2xl font-bold mb-4">Stock Data</h2>
        <p>Please select the company's ticker:</p>
        <input
          type="text"
          className="border p-2 mt-2 w-full"
          list="tickersList"
          onChange={(e) => setTickerInput(e.target.value)}
          value={tickerInput}
          placeholder="Type or select ticker"
        />
        <datalist id="tickersList">
          {tickers.map((ticker) => (
            <option key={ticker} value={ticker}>
              {ticker}
            </option>
          ))}
        </datalist>
        <button onClick={handleFetchStockGraph} className="bg-custom-stockbutton text-white px-4 py-2 mt-4 rounded">
          Generate Graph
        </button>
        {stockGraph && <img src={stockGraph} alt="Stock Graph" className="generated-image" />}
      </section>
    </div>
  );
}

export default App;
