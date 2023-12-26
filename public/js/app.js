const menuLinks = document.querySelectorAll("#sidenav ul li a");
const openMenuBtn = document.querySelector("#menu-open");
const closeMenuBtn = document.querySelector("#menu-close");
const modeBtn = document.querySelector(".mode-btn");
const modeBtnIcon = document.querySelector(".mode-btn img");
const root = document.documentElement;

const modes = {
    light: {
        background: "white",
        color: "black"
    },
    dark: {
        background: "#262636",
        color: "#f3f3fa"
    },
}

let currentMode = localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light";

updateMode(modes[currentMode]);

modeBtn.addEventListener("click", () => {
    currentMode = currentMode === "light" ? "dark" : "light"; 
    const mode = modes[currentMode];
    updateMode(mode)
    localStorage.setItem("currentMode", currentMode);
})

function updateIcon() {
    modeBtnIcon.src = `../images/${currentMode === "light" ? "moon" : "sun"}.webp`;
}

function updateMode(mode) {
    root.style.setProperty('--background', mode.background);
    root.style.setProperty('--color', mode.color);
    updateIcon();
}

openMenuBtn.addEventListener("click", () => {
    menuAnimation.direction = "normal"
    menuAnimation.play()
})
closeMenuBtn.addEventListener("click", () => {
    menuAnimation.direction = "reverse"
    menuAnimation.play()
})

menuLinks.forEach((link, i) => {
    link.addEventListener("click", () => {
        menuAnimation.direction = "reverse"
        menuAnimation.play()
    })
})