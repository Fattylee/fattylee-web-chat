const socket = io();
socket.on('connect', () => {
  console.log('connected to server');
  socket.on('newEmail', (payload) => {
    console.log('Got new email', payload);
  });
  
  socket.emit('createEmail', {
    to: 'mapopo',
    text: 'hey, maposki!',
  });
  
  socket.on('newMessage', (payload) => {
    console.log('got a new message from:', payload);
  });
  
  socket.emit('createMessage', {from: 'fattylee', 'text': 'Good-day everyone!'});

});

socket.on('disconnect', () => {
  console.log('disconnected from server, ure now offline');  
});