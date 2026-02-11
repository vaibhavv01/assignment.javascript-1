const eventsContainer = document.getElementById("eventsContainer");
const addBtn = document.getElementById("addEvent");
const clearBtn = document.getElementById("clearAll");
const sampleBtn = document.getElementById("sample");
const keyOutput = document.getElementById("keyOutput");

// Add Event
addBtn.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const desc = document.getElementById("desc").value;

  if (!title || !date) return alert("Title & Date required");

  createEvent(title, date, category, desc);
});

// Create Event Card
function createEvent(title, date, category, desc) {
  const div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
    <button class="delete">✖</button>
    <h4>${title}</h4>
    <p>📅 ${date}</p>
    <span>${category}</span>
    <p>${desc}</p>
  `;

  eventsContainer.appendChild(div);
}

// Event Delegation
eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Clear All
clearBtn.addEventListener("click", () => {
  eventsContainer.innerHTML = "";
});

// Sample Events
sampleBtn.addEventListener("click", () => {
  createEvent(
    "Web Development Conference",
    "2026-02-15",
    "Conference",
    "Annual conference on modern web technologies."
  );
  createEvent(
    "JavaScript Workshop",
    "2026-02-20",
    "Workshop",
    "Hands-on JavaScript learning session."
  );
});

// DOM Manipulation Demo
document.addEventListener("keydown", (e) => {
  keyOutput.innerText = `You Pressed: ${e.key}`;
});
