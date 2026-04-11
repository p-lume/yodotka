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

/* INSTAGRAM FEED AUTO */
async function loadInstagram() {
    const url = "https://cdn.lightwidget.com/widgets/abcd1234.json"; // ← remplace par ton lien JSON LightWidget

    try {
        const response = await fetch(url);
        const data = await response.json();

        const container = document.getElementById("insta-feed");

        data.data.slice(0, 6).forEach(post => {
            const img = document.createElement("img");
            img.src = post.thumbnail;
            img.alt = "Instagram photo";
            container.appendChild(img);
        });

    } catch (error) {
        console.log("Erreur Instagram :", error);
    }
}

loadInstagram();

