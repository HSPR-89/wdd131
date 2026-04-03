
const flightType = document.getElementById("flightType");


if (flightType) {
    const result = document.getElementById("result");
    const image = document.getElementById("flightImage");

    flightType.addEventListener("change", function () {
        let value = flightType.value;

        if (value === "city") {
            result.textContent = `Flying in the city requires caution due to buildings and people.`;
            image.src = "images/city.jpg";
        } else if (value === "nature") {
            result.textContent = `Flying in nature is great for landscapes and open space.`;
            image.src = "images/nature.jpg";
        } else {
            result.textContent = "";
            image.src = "";
        }
    });
}



function showTips() {
    const tips = [
        "Check battery before flying",
        "Avoid strong wind",
        "Follow local laws",
        "Keep line of sight",
        "Start in an open area with few obstacles",
        "Practice takeoff, landing, and hovering first",
        "Keep a safe distance from people and animals",
        "Calibrate your drone before flying",
        "Use beginner mode if available",
        "Land immediately if something feels wrong"
    ];

    const list = document.getElementById("tipsList");
    list.innerHTML = "";

    tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        list.appendChild(li);
    });
}



const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`


function saveFavorite(spot) {
    localStorage.setItem("favoriteSpot", spot);

    document.getElementById("favoriteMessage").textContent =
        "Your favorite photo is: " + spot;
}

// Mostrar al cargar
const savedSpot = localStorage.getItem("favoriteSpot");

if (savedSpot) {
    const message = document.getElementById("favoriteMessage");
    if (message) {
        message.textContent = "Your favorite spot is: " + savedSpot;
    }
}







function saveFavorite(spot) {
    localStorage.setItem("favoriteSpot", spot);

    document.getElementById("favoriteMessage").textContent =
        "Saved favorite: " + spot;

    // Quitar favorito anterior
    document.querySelectorAll(".drone-img").forEach(img => {
        img.classList.remove("favorite");
    });

    // Buscar la imagen correcta y resaltarla
    const images = document.querySelectorAll(".drone-img");

    images.forEach(img => {
        if (img.alt === spot) {
            img.classList.add("favorite");
        }
    });
}