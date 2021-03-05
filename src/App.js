import './App.css';

function App(props) {
  return (
    <div className="App">
      <div id="main">

        <div id="header-image">
          <img src="other/stocks_by_Bram_van_Oosterhout.jpg" />
          <h1>All of your cryptocurrencies in one place</h1>
          <h3><i>Image by <a href="https://www.pexels.com/@bram-van-oosterhout-18650409" target="_blank"><b>Bram van Oosterhout</b></a></i></h3>
        </div>

        <div id="details">
          <div class="line-box">
            <div class="info-card">
              <h1>Clean</h1>
              <p>The purpose of Cryptovalue is to quickly show relevant information without any hassle. The website layout is simple and easy to quickly navigate.</p>
            </div>

            <div class="info-card">
              <h1>Simple</h1>
              <p>Cryptovalue is to be used by everyone. That's why all the data is presented in an easy way to understand.</p>
            </div>

            <div class="info-card">
              <h1>Up-to-date</h1>
              <p>With the help of a third-party API, you are shown the latest crypto data and all the critical market changes.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
