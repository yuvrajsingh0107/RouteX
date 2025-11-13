import { Server } from "socket.io";
import express from 'express'
import { createServer } from 'http';

const port = 3000;
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: { origin: ['http://localhost:5173'], credentials: true }
});

const busLocations = [
    { busId: 'BUS-21', lat: 22.6043665, lng: 75.6862283, speed: 35.6 },
    { busId: 'BUS-22', lat: 22.6050123, lng: 75.6857421, speed: 28.4 },
    { busId: 'BUS-23', lat: 22.6039418, lng: 75.6870156, speed: 40.2 },
    { busId: 'BUS-24', lat: 22.6048287, lng: 75.6881949, speed: 32.8 },
    { busId: 'BUS-25', lat: 22.6034729, lng: 75.6849132, speed: 36.1 },
    { busId: 'BUS-26', lat: 22.6053894, lng: 75.6868778, speed: 29.7 }
];


setInterval(() => {
    busLocations.forEach(bus => {
        bus.lat += (Math.random() - 0.5) * 0.01;
        bus.lng += (Math.random() - 0.5) * 0.01;
    }
    );
    io.emit("busUpdate", busLocations);
}, 5000);

io.on("connection", (socket) => {
    console.log("connected ", socket.id)
    socket.emit("busUpdate", busLocations);
});

httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});