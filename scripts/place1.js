// Fecha actual
const today = new Date();

// Año
const year = document.querySelector("#currentyear");
if (year) {
    year.textContent = today.getFullYear();
}

// Última modificación
const lastModified = document.querySelector("#lastmodified");
if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}

// Obtener valores desde HTML
const tempElement = document.querySelector("#temp");
const windElement = document.querySelector("#wind");
const windChillElement = document.querySelector("#windchill");

if (tempElement && windElement && windChillElement) {

    const temperature = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windElement.textContent);

    function calculateWindChill(tempC, speedKmh) {
        return (
            13.12 +
            0.6215 * tempC -
            11.37 * Math.pow(speedKmh, 0.16) +
            0.3965 * tempC * Math.pow(speedKmh, 0.16)
        ).toFixed(1);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}