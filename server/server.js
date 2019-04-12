const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const { generateMessage } = require('./utils/generators');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use('/', express.static(path.join(__dirname, '..', 'public')));


io.on('connection', (socket) => {
  console.log('new user conected!');
  
  socket.on('disconnect', () => {
    console.log('client disconected');
  });
  
  socket.emit('newMessage', generateMessage('admin', 'welcome to the chat room'));
  socket.broadcast.emit('newMessage', generateMessage('admin', 'a new user just joined the chat room'));
  
  socket.on('createMessage', ({from, text}, receipt) => {
    io.emit('newMessage', generateMessage(from, text));
    //socket.broadcast.emit('newMessage', generateMessage(payload.from, payload.text));
    if(receipt)
    receipt('server: message sent');
  });
  
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server running on port', port);
});