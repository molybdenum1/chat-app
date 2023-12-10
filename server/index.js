const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const router = require("./route");

const app = express();


app.use(express.json());
app.use(cors({ origin: true }));
app.use(router);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

server.listen(5000, () => console.log("Server is running..."))