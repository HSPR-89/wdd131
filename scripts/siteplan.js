// DOM interaction
const flightType = document.getElementById("flightType");
const result = document.getElementById("result");

if (flightType) {
    flightType.addEventListener("change", function () {
        let value = flightType.value;

        if (value === "city") {
            result.textContent = `City flying requires more caution!`;
        } else if (value === "nature") {
            result.textContent = `Nature flying is great for photos!`;
        } else {
            result.textContent = "";
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