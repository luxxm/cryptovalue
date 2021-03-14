const { buildQueries } = require('@testing-library/react');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/build"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

var server = app.listen(80);
