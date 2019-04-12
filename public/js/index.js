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
const buttonLocation = document.querySelector('#location');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if(!textBox.value.trim()) return;
  
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

socket.on('newLocationMessage', ({from, url, createdAt}) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  ol.appendChild(li);
  const liText = document.createTextNode(from + ': ');
  li.appendChild(liText);
  li.appendChild(a);
  const aText = document.createTextNode('Show current location');
  a.appendChild(aText);
  a.setAttribute('target', '_blank');
  a.setAttribute('href', url);
})

buttonLocation.addEventListener('click', (event) => {
  if(!navigator.geolocation) return alert('Your browser does not not support geolocation');
  buttonLocation.setAttribute('disabled', '');
  navigator.geolocation.getCurrentPosition((pos) => {
    buttonLocation.removeAttribute('disabled');
    const { coords: {latitude}, coords: {longitude}} = pos;
    console.log('my latitude & longitude:', latitude, longitude);
    socket.emit('createLocation', {latitude, longitude});
  }, (err) => {
    buttonLocation.removeAttribute('disabled');
    console.error('error:', error);
  });
});