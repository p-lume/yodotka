/* =========================================================
   YODOTKA — SCRIPT COMPLET
========================================================= */


/* =========================================================
   1. ANIMATION AU SCROLL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const faders = document.querySelectorAll(
        ".fade-up, .dip-card"
    );

    if (!faders.length) return;

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("appear");

                observer.unobserve(entry.target);

            });

        },
        appearOptions
    );

    faders.forEach(fader => {

        appearOnScroll.observe(fader);

    });

});


/* =========================================================
   2. LIRE LA SUITE — ABOUT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector(".btn-toggle");

    const story = document.querySelector(".story");

    if (!btn || !story) return;

    btn.addEventListener("click", () => {

        story.classList.toggle("open");

        if (story.classList.contains("open")) {

            btn.textContent = "Réduire";

        } else {

            btn.textContent = "Lire la suite";

        }

    });

});


/* =========================================================
   3. SÉLECTION DU SOIN
      + GRISER LES AUTRES
      + AFFICHER LE FORMULAIRE
      + DESCENDRE AUTOMATIQUEMENT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards =
        document.querySelectorAll(".service-card");

    const serviceGrid =
        document.getElementById("serviceGrid");

    const formWrapper =
        document.getElementById("bookingFormWrapper");

    const serviceInput =
        document.getElementById("service");

    const selectedService =
        document.getElementById("selectedService");


    /* Si nous ne sommes pas sur la page RDV,
       on ne fait rien. */

    if (
        !cards.length ||
        !serviceGrid ||
        !formWrapper
    ) {
        return;
    }


    /* -----------------------------------------------------
       FONCTION DE SÉLECTION
    ----------------------------------------------------- */

    function selectService(card) {


        /* Retirer l'ancienne sélection */

        cards.forEach(c => {

            c.classList.remove("active");

        });


        /* Activer la carte */

        card.classList.add("active");


        /* Ajouter l'état "sélection effectuée" */

        serviceGrid.classList.add(
            "has-selection"
        );


        /* Valeur envoyée à FormSubmit */

        if (serviceInput) {

            serviceInput.value =
                card.dataset.value;

        }


        /* Nom visible dans le formulaire */

        if (selectedService) {

            const title =
                card.querySelector("h3");

            if (title) {

                selectedService.textContent =
                    title.textContent.trim();

            }

        }


        /* Faire apparaître le formulaire */

        formWrapper.classList.add("visible");


        /*
         * Petit délai :
         * l'animation du formulaire commence,
         * puis on descend doucement vers lui.
         */

        setTimeout(() => {

            const offset = 90;

            const formTop =
                formWrapper.getBoundingClientRect().top
                + window.scrollY
                - offset;


            window.scrollTo({

                top: formTop,

                behavior: "smooth"

            });

        }, 180);

    }


    /* -----------------------------------------------------
       CLIC SOURIS / DOIGT
    ----------------------------------------------------- */

    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                selectService(card);

            }
        );


        /* -------------------------------------------------
           CLAVIER
           Entrée ou espace
        ------------------------------------------------- */

        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    selectService(card);

                }

            }
        );

    });

});


/* =========================================================
   4. DATES DISPONIBLES
========================================================= */

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
        "Dimanche 4 octobre à 17h"

    ];


    const dateSelect =
        document.getElementById("date");


    if (!dateSelect) return;


    dates.forEach(date => {

        const option =
            document.createElement("option");

        option.value = date;

        option.textContent = date;

        dateSelect.appendChild(option);

    });

});


/* =========================================================
   5. VÉRIFICATION AVANT ENVOI
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const form =
        document.getElementById("rdvForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        event => {


            const service =
                document.getElementById("service");


            /* Aucun soin sélectionné */

            if (
                !service ||
                service.value === ""
            ) {

                event.preventDefault();


                alert(
                    "Veuillez sélectionner un soin avant de continuer."
                );


                return;

            }


            /* Aucune date */

            const date =
                document.getElementById("date");


            if (
                !date ||
                date.value === ""
            ) {

                event.preventDefault();


                alert(
                    "Veuillez choisir une date et une heure."
                );


                return;

            }

        }
    );

});


/* =========================================================
   6. CARROUSEL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const slides =
        document.querySelectorAll(
            ".carousel-slide"
        );

    const prev =
        document.querySelector(".prev");

    const next =
        document.querySelector(".next");


    if (
        !slides.length ||
        !prev ||
        !next
    ) {
        return;
    }


    let index = 0;


    function showSlide(i) {


        slides.forEach(slide => {

            slide.classList.remove(
                "active"
            );

        });


        slides[i].classList.add(
            "active"
        );

    }


    prev.addEventListener(
        "click",
        () => {

            index =
                (index - 1 + slides.length)
                % slides.length;

            showSlide(index);

        }
    );


    next.addEventListener(
        "click",
        () => {

            index =
                (index + 1)
                % slides.length;

            showSlide(index);

        }
    );


    setInterval(
        () => {

            index =
                (index + 1)
                % slides.length;

            showSlide(index);

        },
        5000
    );

});


/* =========================================================
   7. POPUP DÉMÉNAGEMENT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const popup =
        document.getElementById(
            "movePopup"
        );


    if (!popup) return;


    /* Affichage après 400 ms */

    setTimeout(
        () => {

            popup.classList.add(
                "show"
            );

        },
        400
    );


    /* Bouton principal */

    const popupButton =
        popup.querySelector(
            ".popup-btn"
        );


    if (popupButton) {

        popupButton.addEventListener(
            "click",
            () => {

                popup.classList.remove(
                    "show"
                );

            }
        );

    }


    /* Croix */

    const closeButton =
        popup.querySelector(
            ".popup-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            () => {

                popup.classList.remove(
                    "show"
                );

            }
        );

    }


    /* Clic à l'extérieur */

    popup.addEventListener(
        "click",
        event => {

            if (
                event.target === popup
            ) {

                popup.classList.remove(
                    "show"
                );

            }

        }
    );

});


/* =========================================================
   8. MENU BURGER MOBILE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const toggle =
        document.getElementById(
            "menuToggle"
        );

    const menu =
        document.getElementById(
            "mobileMenu"
        );


    if (!toggle || !menu) return;


    toggle.addEventListener(
        "click",
        () => {


            const isOpen =
                menu.classList.toggle(
                    "open"
                );


            toggle.textContent =
                isOpen
                    ? "✕"
                    : "☰";


        }
    );


    /* Fermer après clic sur un lien */

    menu.querySelectorAll("a")
        .forEach(link => {


            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "open"
                    );

                    toggle.textContent =
                        "☰";

                }
            );

        });

});
