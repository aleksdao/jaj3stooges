var express = require('express');

var app = express();
var server = require('http').Server(app);

var path = require('path');

var io = require('socket.io')(server);

var colors = ['red','blue','black','purple'];

server.listen(3000, function(){
  console.log('listening on port 3000');
});

app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/change_color.html');
});

app.get('/play', function(req, res){

  console.log('play');

  io.emit('play', { show: show });

  res.send();

});


// setInterval(function(){
//
//   var rand = Math.floor(Math.random() * 4);
//
//   io.emit('changecolor', { color: colors[rand] });
//
// },300);

var show = {
  length: '3:0:0',
  '0:0:0': {changeColor: randColor()},
  '0:1:0': {changeColor: randColor()},
  '0:2:0': {changeColor: randColor()},
  '0:3:0': {changeColor: randColor()},
  '1:0:0': {changeColor: randColor()},
  '1:1:0': {changeColor: randColor()},
  '1:2:0': {changeColor: randColor()},
  '2:3:0': {changeColor: randColor()},

};


function randColor(){
  return '#' + Math.random().toString(16).slice(2, 8).toUpperCase();
};


io.on('connection', function (socket) {

  console.log('user connected');

});
io.on('disconnect', function (socket) {

  console.log('user disconnnected');

});
