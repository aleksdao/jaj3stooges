var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var colors = ['red','blue','black','purple'];

server.listen(3000, function(){
  console.log('listening on port 3000');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/change_color.html');
});


setInterval(function(){

  var rand = Math.floor(Math.random() * 4);

  io.emit('changecolor', { color: colors[rand] });

},300);



io.on('connection', function (socket) {

  console.log('user connected');

});
