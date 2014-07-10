
var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');


app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));

app.engine('html', engines.jade);
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('ipsum.html');
    });

var server = app.listen(3000, function() {
    console.log('listening on port %d', server.address().port);
    });

app.use(function(req, res, next){
      res.send(404, 'Sorry cant find that!');
      });

//using consolidate after reading this:
//http://stackoverflow.com/questions/16111386/node-js-cannot-find-module-html
