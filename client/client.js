const socket = io(`http://localhost:3000`);

const memberName = prompt("Who goes there?");

socket.on('handshake', welcome => {
  console.log(`The server says: ${welcome}`);
  socket.emit('member-joined', memberName);
});

socket.on('new-member', member => {
  console.log(`${member} has joined the thread!`);
});

socket.on('new-message', data => {
  console.log({user: data.user, message: data.message})
})