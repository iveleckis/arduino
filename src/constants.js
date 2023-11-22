const DEFAULT_PORT = 3000;

const SERVER_RUNNING_MESSAGE = `Server is running on port: ${
    process.env.PORT ?? DEFAULT_PORT
}.`;

const BOARD_CONNECTED_MESSAGE = "Board connected.";

const SERVER_SOCKET_CONNECTED_MESSAGE = "Server socket connected.";

module.exports = {
    SERVER_RUNNING_MESSAGE,
    BOARD_CONNECTED_MESSAGE,
    SERVER_SOCKET_CONNECTED_MESSAGE,
};
