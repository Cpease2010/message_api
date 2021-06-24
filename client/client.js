const socket = io('http://localhost:3000');

const memberName = prompt("Who goes there?");

socket.on('welcome', data => {
  console.log(data);
  socket.emit('member-joined', memberName);
});

socket.on('new-member', member => {
  console.log('client', member);
});