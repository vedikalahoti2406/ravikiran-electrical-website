
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.innerHTML = "☰";
        });
    });
}

// AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// SHOP CONTACT NUMBERS
const SHOP_PHONES = [
    "919226983355",
    "917498198802"
];

// WHATSAPP CONTACT FUNCTION
function contactShop() {

    const message =
        "Hello Ravikiran Electrical! I want to enquire about your products.";

    let selectedPhone = SHOP_PHONES[0];

    if (SHOP_PHONES.length > 1) {
        const choice = prompt(
            "Choose WhatsApp contact:\n1. First shop number\n2. Second shop number\n\nEnter 1 or 2:"
        );

        if (choice === null) return;

        if (choice === "2") {
            selectedPhone = SHOP_PHONES[1];
        } else if (choice !== "1") {
            alert("Please enter 1 or 2.");
            return;
        }
    }

    const whatsappURL =
        "https://wa.me/" + selectedPhone +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
