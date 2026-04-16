
const flightType = document.getElementById("flightType");


if (flightType) {
    const result = document.getElementById("result");
    const image = document.getElementById("flightImage");

    flightType.addEventListener("change", function () {
        let value = flightType.value;

        if (value === "city") {
            result.innerHTML = `
        <h2>🏙️ Beginner’s Guide: Flying Drones in the City</h2>

        <h3>1. Know the Rules First</h3>
        <ul>
            <li>Check local regulations (in Costa Rica, this is handled by the Dirección General de Aviación Civil).</li>
            <li>Avoid restricted areas such as airports, government buildings, and large public events.</li>
            <li>Respect privacy—do not record people without their consent.</li>
        </ul>

        <h3>2. Choose the Right Drone Settings</h3>
        <ul>
            <li>Enable GPS stabilization</li>
            <li>Enable obstacle avoidance</li>
            <li>Enable Return-to-Home (RTH)</li>
            <li>Set a safe maximum altitude to avoid buildings</li>
        </ul>

        <h3>3. Pre-Flight Checklist</h3>
        <ul>
            <li>Fully charged battery</li>
            <li>Propellers in good condition</li>
            <li>Strong GPS signal</li>
            <li>Stable weather (avoid strong winds between buildings)</li>
        </ul>

        <h3>4. Flying Tips in Urban Areas</h3>
        <ul>
            <li>Always maintain visual line of sight (VLOS)</li>
            <li>Fly above nearby obstacles, but within legal limits</li>
            <li>Avoid urban canyons (narrow streets with tall buildings → signal loss)</li>
            <li>Take off from open areas (parks, rooftops, wide spaces)</li>
        </ul>

        <h3>5. Safety & Awareness</h3>
        <ul>
            <li>Watch for cables, antennas, and birds</li>
            <li>Never fly over traffic or crowds</li>
            <li>Be ready to use the emergency stop if needed</li>
        </ul>
    `;
            image.src = "images/city.jpg";

        } else if (value === "nature") {
            result.innerHTML = `
        <h2>🌄 Beginner’s Guide: Flying Drones in Nature</h2>

        <h3>1. Check Regulations & Protected Areas</h3>
        <ul>
            <li>Some national parks prohibit drones</li>
            <li>Always verify local rules before flying</li>
        </ul>

        <h3>2. Respect Wildlife</h3>
        <ul>
            <li>Do not chase animals</li>
            <li>Keep a safe distance, especially from birds</li>
            <li>If animals react, move away immediately</li>
        </ul>

        <h3>3. Pre-Flight in Remote Areas</h3>
        <ul>
            <li>Bring extra batteries</li>
            <li>Download offline maps</li>
            <li>Calibrate compass before flying</li>
        </ul>

        <h3>4. Flying Tips in Nature</h3>
        <ul>
            <li>Fly with the wind, not against it</li>
            <li>Use landmarks to maintain orientation</li>
            <li>Maintain safe altitude above terrain</li>
        </ul>

        <h3>5. Environmental Awareness</h3>
        <ul>
            <li>Avoid sand, dust, and loose dirt</li>
            <li>Be cautious of humidity, rain, and fog</li>
            <li>Return before battery drops below 30%</li>
        </ul>
    `;
            image.src = "images/nature.jpg";

        } else {
            result.innerHTML = "";
            image.src = "";
        }
    });
}



function showTips() {
    const tips = [
        "🔋 Check battery before flying",
        "🌬️ Avoid strong wind",
        "📜 Follow local laws",
        "👁️ Keep line of sight",
        "🌳 Start in an open area with few obstacles",
        "🎮 Practice takeoff, landing, and hovering first",
        "👥 Keep a safe distance from people and animals",
        "🧭 Calibrate your drone before flying",
        "🟢 Use beginner mode if available",
        "⚠️ Land immediately if something feels wrong"
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    const list = document.getElementById("tipsList");

    list.innerHTML = `
        <li class="tip-card">
            <strong>💡 Pro Tip:</strong><br>${randomTip}
        </li>
    `;
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


    document.querySelectorAll(".drone-img").forEach(img => {
        img.classList.remove("favorite");
    });


    const images = document.querySelectorAll(".drone-img");

    images.forEach(img => {
        if (img.alt === spot) {
            img.classList.add("favorite");
        }
    });
}


function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}