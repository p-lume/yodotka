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

if (btn && story) {
    btn.addEventListener("click", () => {
        story.classList.toggle("open");
        btn.textContent = story.classList.contains("open")
            ? "Réduire"
            : "Lire la suite";
    });
}


/* --- Sélection du soin --- */
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {

        document.querySelectorAll(".service-card")
            .forEach(c => c.classList.remove("active"));

        card.classList.add("active");

        const serviceInput = document.getElementById("service");
        if (serviceInput) {
            serviceInput.value = card.dataset.value;
        }
    });
});


/* --- Dates disponibles --- */
document.addEventListener("DOMContentLoaded", () => {

    const dates = [
    
     "Dimanche 26 juillet à 10h",
"Dimanche 26 juillet à 14h",
"Dimanche 26 juillet à 17h",

"Lundi 27 juillet à 10h",
"Lundi 27 juillet à 14h",
"Lundi 27 juillet à 17h",

"Mardi 28 juillet à 10h",
"Mardi 28 juillet à 14h",
"Mardi 28 juillet à 17h",

"Mercredi 29 juillet à 17h",

"Jeudi 30 juillet à 10h",
"Jeudi 30 juillet à 14h",
"Jeudi 30 juillet à 17h",

"Vendredi 31 juillet à 10h",
"Vendredi 31 juillet à 14h",
"Vendredi 31 juillet à 17h",

"Samedi 1 août à 10h",
"Samedi 1 août à 14h",
"Samedi 1 août à 17h",

"Dimanche 2 août à 10h",
"Dimanche 2 août à 14h",
"Dimanche 2 août à 17h",

"Samedi 8 août à 10h",
"Samedi 8 août à 14h",
"Samedi 8 août à 17h",

"Dimanche 9 août à 10h",
"Dimanche 9 août à 14h",
"Dimanche 9 août à 17h",

"Samedi 15 août à 10h",
"Samedi 15 août à 14h",
"Samedi 15 août à 17h",

"Dimanche 16 août à 10h",
"Dimanche 16 août à 14h",
"Dimanche 16 août à 17h",

"Samedi 22 août à 10h",
"Samedi 22 août à 14h",
"Samedi 22 août à 17h",

"Dimanche 23 août à 10h",
"Dimanche 23 août à 14h",
"Dimanche 23 août à 17h",

"Samedi 29 août à 10h",
"Samedi 29 août à 14h",
"Samedi 29 août à 17h",

"Dimanche 30 août à 10h",
"Dimanche 30 août à 14h",
"Dimanche 30 août à 17h",

"Samedi 5 septembre à 10h",
"Samedi 5 septembre à 14h",
"Samedi 5 septembre à 17h",

"Dimanche 6 septembre à 10h",
"Dimanche 6 septembre à 14h",
"Dimanche 6 septembre à 17h",

"Samedi 12 septembre à 10h",
"Samedi 12 septembre à 14h",
"Samedi 12 septembre à 17h",

"Dimanche 13 septembre à 10h",
"Dimanche 13 septembre à 14h",
"Dimanche 13 septembre à 17h",

"Samedi 19 septembre à 10h",
"Samedi 19 septembre à 14h",
"Samedi 19 septembre à 17h",

"Dimanche 20 septembre à 10h",
"Dimanche 20 septembre à 14h",
"Dimanche 20 septembre à 17h",

"Samedi 26 septembre à 10h",
"Samedi 26 septembre à 14h",
"Samedi 26 septembre à 17h",

"Dimanche 27 septembre à 10h",
"Dimanche 27 septembre à 14h",
"Dimanche 27 septembre à 17h",

"Samedi 3 octobre à 10h",
"Samedi 3 octobre à 14h",
"Samedi 3 octobre à 17h",

"Dimanche 4 octobre à 10h",
"Dimanche 4 octobre à 14h",
"Dimanche 4 octobre à 17h",
    ];

    const dateSelect = document.getElementById("date");

    if (dateSelect) {
        dates.forEach(d => {
            const option = document.createElement("option");
            option.value = d;
            option.textContent = d;
            dateSelect.appendChild(option);
        });
    }

});


/* --- Vérification avant envoi --- */
const form = document.getElementById("rdvForm");

if (form) {
    form.addEventListener("submit", function (e) {
        const service = document.getElementById("service");

        if (!service || service.value === "") {
            e.preventDefault();
            alert("Veuillez sélectionner un soin.");
        }
    });
}
/* ---------- CARROUSEL ---------- */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".carousel-slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    if (!slides.length || !prev || !next) return;

    let index = 0;

    function showSlide(i) {

        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        slides[i].classList.add("active");
    }

    prev.addEventListener("click", () => {

        index = (index - 1 + slides.length) % slides.length;

        showSlide(index);

    });

    next.addEventListener("click", () => {

        index = (index + 1) % slides.length;

        showSlide(index);

    });

    setInterval(() => {

        index = (index + 1) % slides.length;

        showSlide(index);

    }, 5000);

});
/* ---------- POPUP DÉMÉNAGEMENT ---------- */

document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("movePopup");

    if (!popup) return;

    // Affiche la popup après 400 ms
    setTimeout(() => {
        popup.classList.add("show");
    }, 400);

    // Boutons de fermeture
    popup.querySelector(".popup-btn").addEventListener("click", () => {
        popup.classList.remove("show");
    });

    popup.querySelector(".popup-close").addEventListener("click", () => {
        popup.classList.remove("show");
    });

    // Clic à l'extérieur
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.remove("show");
        }
    });

});
