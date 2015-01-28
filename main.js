var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.post('/login', function(req, res){
  console.log(req.body);
    res.redirect(req.body.redirectTo);
});

app.use(express.static(__dirname));
app.listen(9090);