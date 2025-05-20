const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

// Socket.IO connection
 io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Listen message from client side
  socket.on('message', (data) => {
    console.log('Received message:', data);

    // Send a response back
    socket.emit('response', { message: 'Hello This is server and received your message' });
    
    
  });

  //disconnect the connection
  io.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}`);
});
