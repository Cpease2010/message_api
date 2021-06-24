const httpServer = require("http").createServer().listen(3000)
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET"]
  }
});

io.on('connection', socket => {
  socket.emit('welcome', 'You have arrived')
  
  socket.on('member-joined', member => {
    socket.broadcast.emit('new-member', member)
  })
})