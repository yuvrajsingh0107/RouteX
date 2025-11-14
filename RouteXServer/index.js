import { Server } from "socket.io";
import express from 'express'
import { createServer } from 'http';

const port = 3000;
const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: { origin: ['http://localhost:5173'], credentials: true }
});


// akk empty array rhe ga
// jse hi bus ki location update hogi
// wo bus ki location us array me push kr di jaye gi 
// agar nhi he to nwe bus add kar di jagi
const busLocations = [];




io.on("connection", (socket) => {
    console.log("connected ", socket.id)
    socket.on("busUpdate", (data) => {
        console.log("Received busUpdate:", data);
        // check if bus already exists in the array
        const busExists = busLocations.map((bus) => { 
            if(bus.busId === data.busId) {
                bus.lat = data.lat;
                bus.lng = data.lng;
                bus.speed = data.speed;
                bus.timestamp = data.timestamp;
                return true;
            }
    });
    if(!busExists.includes(true)) {
        busLocations.push(data);
    }
       
       
        io.emit("busUpdate", busLocations);
    })
});

httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});