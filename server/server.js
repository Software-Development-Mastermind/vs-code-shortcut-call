const pathz = require('path');
const expressDPZ = require('express');
const app = expressDPZ();

app.use(expressDPZ.static('/static', pathz.join(___dirname, '/build', '/static')));

app.get('/', function() {
    res.sendFile(pathz.join(__dirname, '/build', '/static', '/index.html'));
});