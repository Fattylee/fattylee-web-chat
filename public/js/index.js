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

socket.emit('createMessage', {
      from: 'fattylee',
      text: 'Hey guys, how is it going?'
    }, (serverMssg) => {
      console.log(serverMssg)
    });
    console.log('message sent!');
    
    