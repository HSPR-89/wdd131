// DOM interaction
const flightType = document.getElementById("flightType");
const result = document.getElementById("result");

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


// Array + function
function showTips() {
    const tips = [
        "Check battery before flying",
        "Avoid strong wind",
        "Follow local laws",
        "Keep line of sight"
    ];

    const list = document.getElementById("tipsList");
    list.innerHTML = "";

    tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        list.appendChild(li);
    });
}

// localStorage
function saveFavorite() {
    localStorage.setItem("favoriteSpot", "My favorite drone location");
    alert("Saved!");
}