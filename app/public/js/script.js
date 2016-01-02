var socket = io.connect('http://localhost:2000');
var stream = ss.createStream();

socket.on('connect', function(data){
	console.log(socket);
});

