/* serialport */
var serialport = require('serialport');
var SerialPort = serialport;
var portName = "COM3"; //process.argv[2];

var myPort = new SerialPort(portName, {
    baudRate: 9600,
});

// make sure to describe these events according to PARSER, not port directly
const parser = myPort.pipe(new serialport.parsers.Readline("\n"));
parser.on('open', onOpen);
parser.on('data', onData);

function onOpen() {
    console.log("Open connection");
}

function onData(data) {
    console.log(data.toString());
    io.emit('portData', data.toString());
}



/* socket.io */
var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/app/src/App.js');

// Send index.html to all requests
var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io')(app, {
  cors: {origin: "http://localhost:3000"}
});

// Send current time to all connected clients
function sendTime() {
    io.emit('time', { time: new Date().toJSON() });
}

// Emit welcome message on connection
io.on('connection', function (socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome to Arduino Demo!', id: socket.id });
});

app.listen(4001);