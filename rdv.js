const serviceSelect = document.getElementById("service");
const dateSelect = document.getElementById("date");
const creneauSelect = document.getElementById("creneau");
const form = document.getElementById("rdvForm");
const message = document.getElementById("message");

// Créneaux fixes samedi
const baseSlots = [
    "09:00 - 10:15",
    "11:00 - 12:15",
    "16:00 - 17:15"
];

// Express = créneaux plus courts
const expressSlots = [
    "09:00 - 09:30",
    "11:00 - 11:30",
    "16:00 - 16:30"
];

// Génère les samedis sur 2 mois
const availability = {};

function generateSaturdays() {
    const today = new Date();
    const horizon = 60;

    for (let i = 0; i < horizon; i++) {
        const d = new Date();
        d.setDate(today.getDate() + i);

        if (d.getDay() === 6) {
            const key = d.toISOString().split("T")[0];
            availability[key] = baseSlots;
        }
    }
}

generateSaturdays();

// Remplir dates
Object.keys(availability).forEach(date => {
    const option = document.createElement("option");
    option.value = date;

    option.textContent = new Date(date).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

    dateSelect.appendChild(option);
});

// Quand service change → reset créneaux
serviceSelect.addEventListener("change", () => {
    creneauSelect.innerHTML = `<option value="">Choisir un créneau</option>`;
});

// Quand date change → afficher créneaux
dateSelect.addEventListener("change", () => {
    const date = dateSelect.value;
    const service = serviceSelect.value;

    creneauSelect.innerHTML = "";

    let slots = baseSlots;

    if (service === "express") {
        slots = expressSlots;
    }

    if (!availability[date]) return;

    slots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        creneauSelect.appendChild(option);
    });
});

// Submit
form.addEventListener("submit", (e) => {
    if (!creneauSelect.value) {
        e.preventDefault();
        message.textContent = "Veuillez choisir un créneau.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Réservation envoyée ✔";
    message.style.color = "green";
});
