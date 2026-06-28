/* --- Animation au scroll --- */
const faders = document.querySelectorAll('.fade-up, .dip-card');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

/* --- Lire la suite (About) --- */
const btn = document.querySelector(".btn-toggle");
const story = document.querySelector(".story");

if (btn) {
    btn.addEventListener("click", () => {
        story.classList.toggle("open");
        btn.textContent = story.classList.contains("open") ? "Réduire" : "Lire la suite";
    });
}

/* --- Sélection du soin --- */
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        document.getElementById('service').value = card.dataset.value;
    });
});

/* --- Dates disponibles --- */
const dates = [
  
   "Samedi 4 juillet 2026",
"Samedi 11 juillet 2026",
"Samedi 18 juillet 2026",
"Samedi 1 août 2026",
"Samedi 8 août 2026",
"Samedi 15 août 2026",
"Samedi 22 août 2026",
"Samedi 29 août 2026",
"Samedi 5 septembre 2026",
"Samedi 12 septembre 2026",
"Samedi 19 septembre 2026",
"Samedi 26 septembre 2026",
"Samedi 3 octobre 2026",
"Samedi 10 octobre 2026",
"Samedi 17 octobre 2026",
"Samedi 24 octobre 2026",
"Samedi 31 octobre 2026"
];

const creneaux = ["10h00", "14h00", "17h00"];

const dateSelect = document.getElementById("date");
const creneauSelect = document.getElementById("creneau");

// Remplir les dates
dates.forEach(d => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    dateSelect.appendChild(option);
});

// Remplir les créneaux quand une date est choisie
dateSelect.addEventListener("change", () => {
    creneauSelect.innerHTML = "<option value=''>Choisir un créneau</option>";
    creneaux.forEach(c => {
        const option = document.createElement("option");
        option.value = c;
        option.textContent = c;
        creneauSelect.appendChild(option);
    });
});
