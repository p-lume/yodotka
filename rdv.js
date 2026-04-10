serviceSelect.addEventListener("change", () => {
    creneauSelect.innerHTML = `<option value="">Choisir un créneau</option>`;
});

dateSelect.addEventListener("change", () => {
    const date = dateSelect.value;
    const service = serviceSelect.value;

    creneauSelect.innerHTML = "";

    if (!availability[date]) return;

    let slots = baseSlots;

    if (service === "kobido_30") {
        slots = expressSlots;
    }

    availability[date].forEach(slot => {
        const option = document.createElement("option");

        option.value = `${slot} (${service})`;
        option.textContent = slot;

        creneauSelect.appendChild(option);
    });
});
