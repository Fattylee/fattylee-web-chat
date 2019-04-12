const socket = io();
socket.on('connect', () => {
  console.log('connected to server');
  
});

socket.on('disconnect', () => {
  console.log('disconnected from server, ure now offline');  
});


    
const form = document.querySelector('#chat');
const textBox = document.querySelector('#chat input');
const ol = document.querySelector('#messages');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  
  socket.emit('createMessage', {
      from: 'User',
      text: textBox.value,
    }, (serverMssg) => {
      console.log(serverMssg)
    });
    
  textBox.value = '';
});

socket.on('newMessage', ({from, text}) => {
  console.log('newMessage', from, text);
  const li = `<li>${from}: ${text}</li>`;
  ol.innerHTML += li;
});
    