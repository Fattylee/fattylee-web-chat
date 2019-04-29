const socket = io();

socket.on('connect', () => {
  console.log('Successfully connected to server', socket.id) ;
});

socket.on('disconnect', () => {
  console.log('server disconnected');
});

socket.on('newMessage', (payload) => {
  console.log('payload', payload);
});

socket.on('leave', (payload) => {
  console.log(payload.from, 'left the room', payload.room);
});
socket.on('feedback', console.log );
/*
socket.emit('newMessage', {
  from: 'Abu Adnaan',
  text: 'hello guys',
  room: 'dev',
});
*/