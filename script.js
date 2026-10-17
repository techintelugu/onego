const searchInput = document.getElementById("serviceSearch");
const cards = document.querySelectorAll(".service-card");
const feedback = document.getElementById("searchFeedback");
const count = document.getElementById("categoryCount");
const findBtn = document.getElementById("findBtn");

if (searchInput) {
  searchInput.addEventListener("input", filterServices);
}

if (findBtn) {
  findBtn.addEventListener("click", () => {
    filterServices();
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    });
  });
}

function filterServices() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;

  cards.forEach(card => {
    const text = (
      card.dataset.category + " " + card.dataset.keywords
    ).toLowerCase();

    const match = text.includes(query);
    card.classList.toggle("hidden", !match);

    if (match) visible++;
  });

  if (count) {
    count.textContent = `${visible} categories`;
  }

  if (feedback) {
    feedback.textContent = query
      ? `${visible} matching categories found.`
      : "";
  }
}

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
