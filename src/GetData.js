var apiUrl = 'https://api.coingecko.com/api/v3/';
var coins = ['bitcoin', 'ethereum', 'monero', 'dogecoin'];

async function getCoinData(coin, days) {
    var req = apiUrl + `coins/${coin}/market_chart?vs_currency=usd&days=${days}`;

    var ftch = await fetch(req, {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=utf-8'}
    });
    var res;

    if (ftch.ok) {
        res = await ftch.json();
    }

    var rawPrices = res['prices'];
    var prices = [];

    for (var i in rawPrices) {
        prices.push(rawPrices[i][1]);
    }

    return prices;
}

async function getPriceChange(coin) {
    var req = apiUrl + `simple/price?ids=${coin}&vs_currencies=usd&include_24hr_change=true`;

    var ftch = await fetch(req, {
        method: 'GET',
        headers: {'Content-Type': 'aplication/json;charset=utf-8'}
    });
    var res;

    if (ftch.ok) {
        res = await ftch.json();
    }

    var pc = [res[coin]['usd'], res[coin]['usd_24h_change']];

    return pc;
}

export {getCoinData, getPriceChange};