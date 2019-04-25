const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const { generateMessage, generateLocationMessage } = require('./utils/generators');
const { isRealString } = require('./utils/validation');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use('/', express.static(path.join(__dirname, '..', 'public')));


io.on('connection', (socket) => {
  console.log('new user conected!');
  
  socket.on('disconnect', () => {
    console.log('client disconected');
  });
  
  socket.on('createMessage', ({from, text}, receipt) => {
    io.emit('newMessage', generateMessage(from, text));
    if(receipt)
    receipt();
  });
  
  socket.on('createLocation', ({latitude, longitude}) => {
    io.emit('newLocationMessage', generateLocationMessage('User',latitude, longitude));
  });
  
  socket.on('join', ({name, room}, receipt) => {
    if(!isRealString(name) || !isRealString(room)) {
      receipt('name and/or room is required');
    }
    else {
      receipt();
      socket.join(room.toLowerCase());
      socket.emit('newMessage', generateMessage('Admin', `${name}, welcome to the chat room`));
  socket.broadcast.to(room).emit('newMessage', generateMessage('Admin', `${name} just joined the chat room`));
    }
  })
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log('Server running on port', port);
});