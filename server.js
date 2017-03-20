//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/movie1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/movie1.html'));
});
app.get('/movie2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/movie2.html'));
});
app.get('/movie3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/movie3.html'));
});
app.get('/movie4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/movie4.html'));
});
app.get('/movie5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/movie5.html'));
});
app.get('/Characters', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Characters.html'));
});
app.get('/Anime', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Anime.html'));
});
app.get('/Manga', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Manga.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});