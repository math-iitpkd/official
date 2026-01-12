const masterPublications = [
    {
        id: "pub1",
        title: "Semi and Fully Discrete Analysis of Extended Fisher-Kolmogorov Equation with Nonstandard FEMs for Space Discretisation",
        authors: "A. Das, N. Nataraj, G. C. Remesan",
        journal: "Journal of Scientific Computing",
        volume: "104",
        number: "14",
        year: 2025,
        tags: ["recent"]
      },
      {
        id: "pub2",
        title: "Rank Bounds in Link Floer homology and Detection Results",
        authors: "S. Dey, F. Binns",
        journal: "Quantum Topology",
        volume: "16",
        number: "4",
        year: 2025,
        tags: ["recent"]
      },
       {
        id: "pub3",
        title: "Essential Surfaces in Link Exteriors and Link Floer Homology",
        authors: "S. Dey",
        journal: "Proceedings of the International Conference on Knots",
        volume: "14",
        number: "",
        year: 2025,
        tags: ["recent"]
      }
];

function openPublications(tags) {
  const list = document.getElementById("publication-list");
  list.innerHTML = "";
  const filtered = masterPublications.filter(pub => pub.tags.some(tag => tags.includes(tag)));
  filtered.forEach(pub => {
    const li = document.createElement("li");
    li.innerHTML = `${pub.authors}, <em>${pub.title}</em>, <strong>${pub.journal}</strong>, <strong>${pub.volume} (${pub.number})</strong>, ${pub.year}.`;
    list.appendChild(li);
  });
  document.getElementById("pub-popup").style.display = "flex";
}

function closePublications() {
  document.getElementById("pub-popup").style.display = "none";
}

function filterProjects() {
    const input = document.getElementById("facultyFilter").value.toLowerCase();
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
      const pi = card.dataset.pi.toLowerCase();
      card.style.display = pi.includes(input) ? "block" : "none";
    });
  }
  
  function populateRecentHomepagePublications() {
    const ul = document.getElementById("homepage-recent-publications");
    if (!ul) return;
    const recent = masterPublications.filter(pub => pub.tags.includes("recent"));
    recent.forEach(pub => {
      const li = document.createElement("li");
      li.innerHTML = `${pub.authors}, <em>${pub.title}</em>, <strong>${pub.journal}</strong>, <strong>${pub.volume} (${pub.number})</strong>, ${pub.year}.`;
      ul.appendChild(li);
    });
  }
  
  populateRecentHomepagePublications();
  observePublications()

