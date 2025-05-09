import { io } from 'socket.io-client';

// 👇 Initialize socket connection
const socket = io('http://localhost:8000', {
   autoConnect: false, // Automatically connect on load (set to false if you want manual control)
   transports: ['websocket'], // Prefer WebSocket
   reconnectionAttempts: 5, // Retry 5 times if connection fails
   timeout: 20000, // Max time to wait for connection
   pingTimeout: 20000, // Max time to wait for ping response
   pingInterval: 25000, // Send ping every 25s
});

// ✅ Connection success

socket.on('connect', () => {
   console.log('✅ Connected to server');
});

socket.on('disconnect', () => {
   console.log('❌ Disconnected from server');
});

socket.on('connect_error', error => {
   throw new Error(`Connection error: ${error.message}`);
});

socket.on('connect_timeout', timeout => {
   console.error(`Connection timeout: ${timeout}`);
});

export default socket;
