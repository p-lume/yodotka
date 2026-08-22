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


/* =========================================================
   SÉLECTION DU SOIN + DESCENTE AUTOMATIQUE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".service-card");
    const serviceGrid = document.getElementById("serviceGrid");
    const formWrapper = document.getElementById("bookingFormWrapper");
    const serviceInput = document.getElementById("service");
    const selectedService = document.getElementById("selectedService");

    if (!cards.length || !formWrapper) return;

    cards.forEach(card => {

        function selectService() {

            /* retirer la sélection précédente */
            cards.forEach(c => {
                c.classList.remove("active");
            });

            /* sélectionner */
            card.classList.add("active");

            /* griser les autres */
            serviceGrid.classList.add("has-selection");

            /* valeur FormSubmit */
            if (serviceInput) {
                serviceInput.value = card.dataset.value;
            }

            /* nom affiché dans le formulaire */
            if (selectedService) {
                selectedService.textContent =
                    card.querySelector("h3").textContent;
            }

            /* faire apparaître le formulaire */
            formWrapper.classList.add("visible");

            /*
             * Petit délai pour laisser l'animation démarrer,
             * puis déplacement doux vers le formulaire.
             */
            setTimeout(() => {

                const offset = 100;

                const top =
                    formWrapper.getBoundingClientRect().top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                });

            }, 180);
        }

        /* clic souris / doigt */
        card.addEventListener("click", selectService);

        /* clavier : Entrée ou espace */
        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                selectService();
            }

        });

    });

});

/* --- Dates disponibles --- */
document.addEventListener("DOMContentLoaded", () => {

    const dates = [
    
   



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
/* MENU BURGER */

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

if (toggle && menu){

    toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        toggle.textContent = menu.classList.contains("open") ? "✕" : "☰";
    });

    menu.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click", ()=>{
            menu.classList.remove("open");
            toggle.textContent="☰";
        });
    });

}
