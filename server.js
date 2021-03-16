const stDate = new Date();

var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    var date = new Date();
    const ip = req.socket.remoteAddress || req.header['x-forwarded-for'];

    console.log(`[${date.getUTCFullYear()}.${date.getUTCMonth()}.${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}] ${ip} requested /`);

    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(express.static(__dirname + "/build"));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "build", "404.html"));

    var date = new Date();
    const ip = req.header['x-forwarded-for'] || req.socket.remoteAddress;

    console.log(`[${date.getUTCFullYear()}.${date.getUTCMonth()}.${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}] ${ip} requested ${req.url}, given 404`);
});

var server = app.listen(0 || process.env.PORT, () => {
    console.log(`[${stDate.getUTCFullYear()}.${stDate.getUTCMonth()}.${stDate.getUTCDate()} ${stDate.getUTCHours()}:${stDate.getUTCMinutes()}] SERVER STARTED AT ${server.address().address}:${server.address().port}!`);
});


function serverExit(exCode) {
    var date = new Date();

    console.log(`[${date.getUTCFullYear()}.${date.getUTCMonth()}.${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}] server stopped with code: ${exCode}`);

    process.exit(0);
}

process.on('exit', exCode => {
    serverExit(exCode)
})

process.on('uncaughtException', exCode => {
    serverExit(exCode);
})

process.on('unhandledRejection', exCode => {
    serverExit(exCode);
})

process.on('SIGTERM', exCode => {
    serverExit(exCode);
})

process.on('SIGINT', exCode => {
    serverExit(exCode);
})
