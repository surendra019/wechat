const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.use(express.static(__dirname));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

io.on('connection', (socket)=>{
  socket.on('chat message', (obj)=>{
    socket.broadcast.emit('client msg', obj);
  });
  socket.on('connected', (name)=>{
    socket.broadcast.emit('client connected', name);
  });
});

server.listen(3000);
