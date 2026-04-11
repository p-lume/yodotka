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
    "Samedi 2 mai 2026",
    "Dimanche 3 mai 2026",
    "Samedi 9 mai 2026",
    "Dimanche 10 mai 2026",
    "Samedi 16 mai 2026",
    "Dimanche 17 mai 2026",
    "Samedi 23 mai 2026",
    "Dimanche 24 mai 2026",
    "Samedi 30 mai 2026",
    "Dimanche 31 mai 2026",
    "Samedi 6 juin 2026",
    "Dimanche 7 juin 2026",
    "Samedi 13 juin 2026",
    "Dimanche 14 juin 2026",
    "Samedi 20 juin 2026",
    "Dimanche 21 juin 2026",
    "Samedi 27 juin 2026",
    "Dimanche 28 juin 2026"
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
