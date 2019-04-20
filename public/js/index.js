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


const scrollToBottom = () => {
  
  const textMessage = $('#messages');
  const children = textMessage.children();
  const lastMessage = children.filter('li:last');
  const secondBeforeLast = lastMessage.prev();
  
  const scrollHeight = textMessage.prop('scrollHeight');
  
  const scrollTop = textMessage.prop('scrollTop');
  const clientHeight = textMessage.prop('clientHeight');
  const sbl =  secondBeforeLast.prop('clientHeight');
  const lm = lastMessage.prop('clientHeight');
  
  if( (scrollTop + clientHeight + sbl + lm) > scrollHeight ) {
    textMessage.scrollTop(scrollHeight);
  }
  
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if(!textBox.value.trim()) return;
  
  socket.emit('createMessage', {
      from: 'User',
      text: textBox.value,
    }, () => {
      textBox.value = '';
    });
    
});

socket.on('newMessage', ({from, text, createdAt}) => {
  const template = document.querySelector('#message-template').innerHTML; Mustache.parse(template); // optional, speeds up future uses 
  const rendered = Mustache.render(template, {
    from,
    text,
    createdAt: moment(createdAt).format('h:mm a'),
  }); 
  ol.innerHTML += rendered;
  scrollToBottom();
});

socket.on('newLocationMessage', ({from, url, createdAt}) => {
  
  const formattedTime = moment(createdAt).format('h:mm a');
  const template = document.querySelector('#location-message-template').innerHTML; Mustache.parse(template); // optional, speeds up future uses 
  const rendered = Mustache.render(template, {
    from,
    url,
    createdAt: formattedTime,
  }); 
  ol.innerHTML += rendered;
  scrollToBottom();
})

buttonLocation.addEventListener('click', (event) => {
  if(!navigator.geolocation) return alert('Your browser does not support geolocation');
  buttonLocation.setAttribute('disabled', '');
  buttonLocation.textContent = 'Sending location...';
  navigator.geolocation.getCurrentPosition((pos) => {
    buttonLocation.removeAttribute('disabled');
    buttonLocation.textContent = 'Send location';
    const { coords: {latitude}, coords: {longitude}} = pos;
    socket.emit('createLocation', {latitude, longitude});
  }, (err) => {
    buttonLocation.removeAttribute('disabled');
    buttonLocation.textContent = 'Send location';
    alert('Unable to fetch location');
  });
});