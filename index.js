const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});

io.on("connect", (socket) => {
  console.log("socket connected");

  socket.on("buttonOnclick", (message) => {
    console.log(message);
  });
});

io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

server.listen(3000, () => {
  console.log("Hello from server");
});
