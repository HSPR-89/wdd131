const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Tablet" },
    { id: "p4", name: "Smartwatch" }
];

const select = document.getElementById("product");

if (select) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`