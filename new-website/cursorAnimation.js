// cursorAnimation.js

const { JSDOM } = require("jsdom");

// Create a new JSDOM instance
const { window } = new JSDOM(`<!DOCTYPE html><html><body><div class="cursor" style="position: absolute;"></div></body></html>`);
const { document } = window;

// Select the cursor element
const cursor = document.querySelector(".cursor");

// Variable to store the timeout
let timeout;

// Follow cursor on mouse move
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Cursor effects on mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// Cursor effect on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// This is just to demonstrate that the script is running
console.log('Cursor animation script running');
