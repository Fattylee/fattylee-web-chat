const socket = io();
socket.on('connect', () => {
  console.log('connected to server');
  
});

socket.on('disconnect', () => {
  console.log('disconnected from server, ure now offline');  
});

socket.on('newMessage', (payload) => {
  console.log('newMessage', payload);
});