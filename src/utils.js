const five = require("johnny-five");
const socket = require("socket.io");
const { BOARD_CONNECTED_MESSAGE } = require("./constants");

async function initBoard(options) {
    return new Promise((resolve, reject) => {
        const board = new five.Board(options);
        board.on("ready", () => {
            console.log(BOARD_CONNECTED_MESSAGE);
            resolve(board);
        });
        board.on("error", (error) => reject(error));
    });
}

module.exports = { initBoard };
