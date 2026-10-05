const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // ඕනෑම තැනක ඉඳන් Connect වෙන්න අවසර දීම
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Android App එකෙන් එන Offer එක Receiver ට යැවීම
  socket.on('offer', (data) => {
    socket.broadcast.emit('offer', data);
  });

  // Receiver ගෙන් එන Answer එක Android App එකට යැවීම
  socket.on('answer', (data) => {
    socket.broadcast.emit('answer', data);
  });

  // Ice Candidates (Network IP/Port details) හුවමාරු කිරීම
  socket.on('candidate', (data) => {
    socket.broadcast.emit('candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // ඕනෑම තැනක ඉඳන් Connect වෙන්න අවසර දීම
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Android App එකෙන් එන Offer එක Receiver ට යැවීම
  socket.on('offer', (data) => {
    socket.broadcast.emit('offer', data);
  });

  // Receiver ගෙන් එන Answer එක Android App එකට යැවීම
  socket.on('answer', (data) => {
    socket.broadcast.emit('answer', data);
  });

  // Ice Candidates (Network IP/Port details) හුවමාරු කිරීම
  socket.on('candidate', (data) => {
    socket.broadcast.emit('candidate', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});