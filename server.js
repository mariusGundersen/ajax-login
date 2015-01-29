var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.post('/login', function(req, res){
  res.redirect(req.body.redirectTo);
});

app.use(express.static(__dirname));
app.listen(8080);
console.log("started");