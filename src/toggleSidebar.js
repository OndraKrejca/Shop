import { getElement } from './utils.js';

const sideBarOverlay = getElement(".sidebar-overlay")
const closeBtn = getElement(".sidebar-close")
const openBtn = getElement(".toggle-nav")

openBtn.addEventListener("click", () => {
    sideBarOverlay.classList.add("show")
})

closeBtn.addEventListener("click", () => {
    sideBarOverlay.classList.remove("show")
})