var express = require('express')
var app = express()
const path = require('path');
//Sample comment
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use(express.static('static'))
 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'static/1.Home.html'));
})
 
var server = app.listen(process.env.PORT || 5000)