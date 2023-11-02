document.addEventListener("DOMContentLoaded", function () {
    const tipoSeguroSelect = document.getElementById("tipoSeguro");
    const costoSeguro = document.getElementById("costoSeguro");

    tipoSeguroSelect.addEventListener("change", function () {
        const seleccion = tipoSeguroSelect.value;
        let precio;

        if (seleccion === "basico") {
            precio = "$500";
        } else if (seleccion === "intermedio") {
            precio = "$1000";
        } else if (seleccion === "premium") {
            precio = "$1500";
        }

        costoSeguro.textContent = "Costo del seguro: " + precio;
    });
});
