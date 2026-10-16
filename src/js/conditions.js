import "../css/style.css";
import "../css/conditions.css";

import {
  getParkData,
  getParkAlerts,
  getVisitorCenterData
} from "./parkService.mjs";

import {
  alertTemplate,
  visitorCenterTemplate,
  activityTemplate
} from "./templates.mjs";

import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const list = document.querySelector(".alerts > ul");
  list.innerHTML = alerts.map(alertTemplate).join("");
}

function setVisitorCenters(centers) {
  const list = document.querySelector(".visitor > details > ul");
  list.innerHTML = centers.map(visitorCenterTemplate).join("");
}

function setActivities(activities) {
  const list = document.querySelector(".activities > details > ul");
  list.innerHTML = activities.map(activityTemplate).join("");
}

async function init() {
  try {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const centers = await getVisitorCenterData(parkData.parkCode);

    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(centers);
    setActivities(parkData.activities);
  } catch (error) {
    console.error("Could not load park information:", error);
  }
}

init();

