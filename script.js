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
    const container = document.getElementById("insta-feed");

    container.innerHTML = `
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"><\/script>
        <iframe 
            src="//lightwidget.com/widgets/62cd21c222e355919f6b53587dd3651a.html"
            scrolling="no"
            allowtransparency="true"
            class="lightwidget-widget"
            style="width:100%;border:0;overflow:hidden;">
        </iframe>
    `;
}

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

