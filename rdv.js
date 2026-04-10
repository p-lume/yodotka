// Créneaux disponibles par date
// ➜ Tu peux modifier ici pour dire ce qui est dispo ou pas
const disponibilites = {
    "2025-02-10": ["10:00", "14:00", "16:00"],
    "2025-02-11": ["09:00", "11:00"],
    "2025-02-12": [], // journée indisponible
    "2025-02-13": ["13:00", "15:30"]
};

const dateInput = document.getElementById("date");
const creneauSelect = document.getElementById("creneau");
const form = document.getElementById("rdvForm");
const message = document.getElementById("message");

// Quand on choisit une date
dateInput.addEventListener("change", () => {
    const date = dateInput.value;
    creneauSelect.innerHTML = "";

    if (!disponibilites[date] || disponibilites[date].length === 0) {
        const option = document.createElement("option");
        option.textContent = "Aucun créneau disponible";
        option.value = "";
        creneauSelect.appendChild(option);
        return;
    }

    disponibilites[date].forEach(cr => {
        const option = document.createElement("option");
        option.value = cr;
        option.textContent = cr;
        creneauSelect.appendChild(option);
    });
});

// Soumission du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const date = dateInput.value;
    const creneau = creneauSelect.value;

    if (!creneau) {
        message.textContent = "Aucun créneau disponible pour cette date.";
        message.style.color = "red";
        return;
    }

    message.textContent = `Merci ${prenom}, votre rendez-vous est réservé le ${date} à ${creneau}.`;
    message.style.color = "green";
});
