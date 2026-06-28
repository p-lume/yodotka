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
  
 ```text
"Samedi 4 juillet à 10h",
"Samedi 4 juillet à 14h",
"Samedi 4 juillet à 17h",

"Samedi 11 juillet à 10h",
"Samedi 11 juillet à 14h",
"Samedi 11 juillet à 17h",

"Samedi 18 juillet à 10h",
"Samedi 18 juillet à 14h",
"Samedi 18 juillet à 17h",

"Samedi 25 juillet à 10h",
"Samedi 25 juillet à 14h",
"Samedi 25 juillet à 17h",

"Samedi 1 août à 10h",
"Samedi 1 août à 14h",
"Samedi 1 août à 17h",

"Samedi 8 août à 10h",
"Samedi 8 août à 14h",
"Samedi 8 août à 17h",

"Samedi 15 août à 10h",
"Samedi 15 août à 14h",
"Samedi 15 août à 17h",

"Samedi 22 août à 10h",
"Samedi 22 août à 14h",
"Samedi 22 août à 17h",

"Samedi 29 août à 10h",
"Samedi 29 août à 14h",
"Samedi 29 août à 17h",

"Samedi 5 septembre à 10h",
"Samedi 5 septembre à 14h",
"Samedi 5 septembre à 17h",

"Samedi 12 septembre à 10h",
"Samedi 12 septembre à 14h",
"Samedi 12 septembre à 17h",

"Samedi 19 septembre à 10h",
"Samedi 19 septembre à 14h",
"Samedi 19 septembre à 17h",

"Samedi 26 septembre à 10h",
"Samedi 26 septembre à 14h",
"Samedi 26 septembre à 17h",

"Samedi 3 octobre à 10h",
"Samedi 3 octobre à 14h",
"Samedi 3 octobre à 17h",

"Samedi 10 octobre à 10h",
"Samedi 10 octobre à 14h",
"Samedi 10 octobre à 17h",

"Samedi 17 octobre à 10h",
"Samedi 17 octobre à 14h",
"Samedi 17 octobre à 17h",

"Samedi 24 octobre à 10h",
"Samedi 24 octobre à 14h",
"Samedi 24 octobre à 17h",

"Samedi 31 octobre à 10h",
"Samedi 31 octobre à 14h",
"Samedi 31 octobre à 17h"
```

];



const dateSelect = document.getElementById("date");

// Remplir les dates
dates.forEach(d => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    dateSelect.appendChild(option);
});


});
