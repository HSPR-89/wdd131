const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`


// Static values (match what's shown on your page)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Function to calculate wind chill in °C (metric system)
function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

// Select the span where wind chill will be shown
const windChillElement = document.querySelector("#windchill");

// Only calculate if valid based on metric rules
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill} ºC`;
} else {
    windChillElement.textContent = "N/A";
}
