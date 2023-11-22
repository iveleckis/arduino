const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const five = require("johnny-five");
const {
    SERVER_RUNNING_MESSAGE,
    SERVER_SOCKET_CONNECTED_MESSAGE,
} = require("./src/constants");
const { initBoard } = require("./src/utils");

async function main() {
    const app = express();
    const server = http.createServer(app);
    const io = new socket.Server(server);

    await initBoard({ repl: false });

    const led = new five.Led({
        pin: 11,
    });

    app.get("/", (_, res) => {
        res.status(200).sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/client.js", (_, res) => {
        res.status(200)
            .type("application/javascript")
            .sendFile(path.join(__dirname, "public/client.js"));
    });

    app.get("/style.css", (_, res) => {
        res.status(200).sendFile(path.join(__dirname, "public/style.css"));
    });

    io.on("connect", (socket) => {
        console.log(SERVER_SOCKET_CONNECTED_MESSAGE);

        socket.on("buttonOnclick", () => {
            if (led.isOn) {
                led.off();
                socket.emit("buttonOnclick", 1);
            } else {
                led.on();
                socket.emit("buttonOnclick", 0);
            }
        });
    });

    server.listen(process.env.PORT ?? 3000, () => {
        console.log(SERVER_RUNNING_MESSAGE);
    });
}

main();
