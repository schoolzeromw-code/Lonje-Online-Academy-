const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

connectDB();
app.use(cors());
app.use(express.json());
app.set('io', io);

// Example route
app.get('/', (req, res) => res.send('LOA Backend Running'));

// Routes
app.use('/api/auth', require('./routes/auth'));

server.listen(5000, () => console.log('Server running on port 5000'));
