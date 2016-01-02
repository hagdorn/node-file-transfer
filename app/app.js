var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var ss = require('socket.io-stream');
var fs = require('fs');
var socketsConnected = 0;

//Set /public as public web directory 
app.use(express.static(__dirname + '/public')); 

//Set port to 2000
server.listen(2000);

io.of('/').on('connection', function(socket) {
	//Log connected socket id and add to socketsConnected
	console.log('Socket connected: (' + socket.id + ')');
	socketsConnected ++;
	
});