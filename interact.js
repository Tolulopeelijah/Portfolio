// =============================
//     INTERACTIVE SCRIPT
// =============================

// Load JSON data and initialize tabs
function loadData() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      setupTabs("projects", data.projects);
      setupTabs("blogs", data.blogs);
      setupTabs("books", data.books);
    })
    .catch((err) => console.error("Failed to load data.json", err));
}

// Create tabbed navigation and load content
function setupTabs(section, items) {
  const tabs = Object.keys(items);
  const container = document.getElementById(`${section}-list`);
  const sectionEl = document.getElementById(section);

  const nav = document.createElement("ul");
  nav.className = "nav nav-pills justify-content-center mb-4";

  tabs.forEach((cat, index) => {
    const li = document.createElement("li");
    li.className = "nav-item";

    const a = document.createElement("a");
    a.className = `nav-link ${index === 0 ? "active" : ""}`;
    a.href = "#";
    a.dataset.category = cat;
    a.textContent = cat.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    a.addEventListener("click", (e) => {
      e.preventDefault();
      sectionEl.querySelectorAll(".nav-link").forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      loadSection(section, items[cat]);
    });

    li.appendChild(a);
    nav.appendChild(li);
  });

  sectionEl.insertBefore(nav, container);
  loadSection(section, items[tabs[0]]);
}

// Render cards for projects, blogs, or books
function loadSection(type, data) {
  const container = document.getElementById(`${type}-list`);
  container.innerHTML = "";

  data.forEach((item) => {
    if (type === "projects") {
      container.innerHTML += `
        <div class="col-md-4 mb-4 d-flex">
          <div class="card card-hover h-100 w-100">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.desc}</p>
              <a href="${item.link}" target="_blank" class="btn btn-outline-primary btn-sm">View Project</a>
            </div>
          </div>
        </div>
      `;
    } else if (type === "blogs") {
      container.innerHTML += `
        <div class="col-md-6 mb-4 d-flex">
          <div class="card card-hover h-100 w-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h6 class="card-subtitle text-muted">${item.date}</h6>
              <p class="card-text">${item.desc}</p>
              <a href="${item.read}" class="btn btn-outline-secondary btn-sm">Read More</a>
              <a href="${item.code}" class="btn btn-outline-secondary btn-sm">Code</a>
            </div>
          </div>
        </div>
      `;
    } else if (type === "books") {
      container.innerHTML += `
        <div class="col-md-4 mb-3 d-flex">
          <div class="card w-100">
            <div class="card-body">
              <h5>${item.title}</h5>
              <p>${item.desc}</p>
            </div>
          </div>
        </div>
      `;
    }
  });
}

// =============================
// Typewriter Effect
// =============================

const typewriterText = document.querySelector(".typewriter-text");
const phrases = [
  "A computer scientist at heart",
  "I love problem solving",
  "I love the research part of ML and AI",
  "I love where programming, logic and  problem solving meets.",
];

let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[typeIndex];
  typewriterText.textContent = isDeleting
    ? currentPhrase.substring(0, charIndex--)
    : currentPhrase.substring(0, charIndex++);

  if (!isDeleting && charIndex > currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 800);
    return;
  }

  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    typeIndex = (typeIndex + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// =============================
// Theme Toggle (Dark/Light)
// =============================

const themeBtn = document.getElementById("toggle-theme");
themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("bg-dark");
});

// =============================
// DOM Ready
// =============================

window.addEventListener("DOMContentLoaded", loadData);
