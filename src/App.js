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
          <h2>ABOUT</h2>

          <p class="normal-text">Cryptovalue is a website for monitoring all of your favorite cryptocurrencies.
          With a focus on simplicity and convenience, cryptovalue is easy to use, for anyone, without any trouble.
          With our intuitive features, you're guaranteed not to miss out on anything.
          Check out our <b><a href="/crypto">crypto collection</a></b>.</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
