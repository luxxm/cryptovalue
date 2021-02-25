import './Crypto.css';
import Graph from './Graph';

function Crypto(props) {
    return(
        <div class="Crypto">
            <h3 id="credits">Powered by <a href="https://www.coingecko.com/en/api" target="_blank"><b>CoinGecko API</b></a>, <a href="https://www.chartjs.org/" target="_blank"><b>Chart.js</b></a></h3>
            
            <Graph parent={props.parent} x='0' y='4' coin='bitcoin' days='1'/>
            <Graph parent={props.parent} x='45' y='4' coin='ethereum' days='1'/>
            <Graph parent={props.parent} x='0' y='35' coin='monero' days='1'/>
            <Graph parent={props.parent} x='45' y='35' coin='litecoin' days='1'/>
            <Graph parent={props.parent} x='0' y='66' coin='dogecoin' days='1'/>
            <Graph parent={props.parent} x='45' y='66' coin='ripple' days='1'/>
            <Graph parent={props.parent} x='0' y='97' coin='dash' days='1'/>
            <Graph parent={props.parent} x='45' y='97' coin='neo' days='1'/>
            <Graph parent={props.parent} x='0' y='128' coin='tron' days='1'/>
            <Graph parent={props.parent} x='45' y='128' coin='icon' days='1'/>
        </div>
    );
}

export default Crypto;