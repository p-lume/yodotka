/* ANIMATION AU SCROLL */
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


const btn = document.querySelector(".btn-toggle");
const story = document.querySelector(".story");

btn.addEventListener("click", () => {
    story.classList.toggle("open");

    if (story.classList.contains("open")) {
        btn.textContent = "Réduire";
    } else {
        btn.textContent = "Lire la suite";
    }
});

