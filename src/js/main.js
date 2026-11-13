import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");

  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);

  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector(".global-nav");

  menuButton.addEventListener("click", (ev) => {
    globalNav.classList.toggle("show");

    let target = ev.target;

    if (target.tagName !== "BUTTON") {
      target = target.closest("button");
    }

    if (globalNav.classList.contains("show")) {
      target.setAttribute("aria-expanded", "true");
      target.setAttribute("aria-label", "Close Menu");
    } else {
      target.setAttribute("aria-expanded", "false");
      target.setAttribute("aria-label", "Open Menu");
    }
  });
}

async function init() {
  enableNavigation();

  const parkData = await getParkData();

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(getInfoLinks(parkData.images));
}

init();
