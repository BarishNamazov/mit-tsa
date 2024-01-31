import { events, exec } from "./data.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const eventsList = $("#events-list");
const eventTemplate = $("#event-template");

events.forEach((event) => {
  const eventNode = eventTemplate.content.cloneNode(true);
  eventNode.querySelector(".event-name").textContent = event.name;
  eventNode.querySelector(".event-description").textContent = event.description;
  eventNode.querySelector(".event-time").textContent = event.time;
  eventNode.querySelector(".event-location").textContent = event.location;
  eventsList.appendChild(eventNode);
});

const execList = $("#exec-list");
const execTemplate = $("#exec-template");

exec.forEach((exec) => {
  const execNode = execTemplate.content.cloneNode(true);
  execNode.querySelector(".exec-name").textContent = exec;
  execList.appendChild(execNode);
});

$("#mailing").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const email = data.get("mailing_email");
  const message = "\n" + data.get("mailing_message");
  const response = await fetch(`/mailinglist.php?address=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`, {
    method: 'GET',
  });

  if (response.ok) {
    const text = await response.text();
    if (text === "1") {
      alert("Your request has been sent!");
      form.reset();
      return;
    }
  }

  alert("There was an error sending your request.");
});