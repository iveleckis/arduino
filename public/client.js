const button = document.querySelector("#button");
button.addEventListener("click", () => {
    socket.emit("buttonOnclick");
});

socket.on("buttonOnclick", (arg) => {
    if (arg === 0) {
        button.classList = "bg-blue shadow text-white";
    } else {
        button.classList = "";
    }
});
