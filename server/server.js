const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use('/', express.static(path.join(__dirname, '..', 'public')));


io.on('connection', (socket) => {
  console.log('new user conected!');
  
  socket.on('disconnect', () => {
    console.log('client disconected');
  });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server running on port', port);
});