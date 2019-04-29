const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const { generateMessage, generateLocationMessage } = require('./utils/generators');
const { isRealString } = require('./utils/validation');
const { User } = require('./utils/users');

const app = express();
const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log('Server running on port', port);
});
const io = socketIO(server);
const users = new User();

app.use('/', express.static(path.join(__dirname, '..', 'public')));


io.on('connection', (socket) => {
  console.log('new user conected!', socket.id);
  
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
      return receipt('name and/or room is required');
    }
    else {
      
      socket.join(room.toLowerCase());
      users.addUser(socket.id, name, room.toLowerCase());
      io.to(room.toLowerCase()).emit('updateUserList', users.getUserList(room.toLowerCase()));
      
      
      socket.emit('newMessage', generateMessage('Admin', `${name}, welcome to the chat room`));
  socket.broadcast.to(room.toLowerCase()).emit('newMessage', generateMessage('Admin', `${name} just joined the chat room`));
      receipt();
    }
  });
  
  socket.on('disconnect', () => {
    console.log('client disconected', socket.id);
    const user = users.removeUser(socket.id);
    if(user) {
                  io.to(user.room).emit('updateUserList', users.getUserList(user.room));
       socket.broadcast.to(user.room.toLowerCase()).emit('newMessage', generateMessage('Admin', `${user.name} left the chat room`));
    }
 });
  
});