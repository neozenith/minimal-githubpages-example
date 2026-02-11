// --- Theme Toggle ---

// Check what theme the user prefers (saved choice or OS setting)
var savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
}

// Initialize Lucide icons (replaces <i data-lucide="..."> tags with SVGs)
lucide.createIcons();

// Snarky messages at milestone toggle counts
var snarkyMessages = {
    10: "Your retinas called. They'd like a word.",
    50: "At this point your screen is basically a strobe light.",
    100: "Triple digits! Your optometrist is buying a boat thanks to you.",
    500: "You've toggled more than most people blink in an hour. Impressive and concerning.",
    1000: "One THOUSAND. You absolute legend. Your eyes are just decorative at this point. No more messages after this. You can stop now.",
    5000: "Please. I am begging you. My toggle can only take so much. Think of the pixels.",
    10000: "Ten thousand. You're not testing the theme. You're punishing yourself. Certified masochist."
};

// Milestones sorted highest-first so we match the biggest one the count has passed
var milestones = [10000, 5000, 1000, 500, 100, 50, 10];

// Track how many times the theme has been toggled
var themeToggle = document.getElementById("theme-toggle");
var message = document.getElementById("message");
var count = 0;

// When clicked, flip between light and dark and update the counter
themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    var isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // After 10,000 toggles, start counting backwards 😈
    if (count >= 10000) {
        count = count - 1;
    } else {
        count = count + 1;
    }
    var text = "Theme changed " + count + " time" + (count === 1 ? "" : "s") + "!";

    // Find the highest milestone we've passed and show its message
    for (var i = 0; i < milestones.length; i++) {
        if (count >= milestones[i]) {
            text = text + " " + snarkyMessages[milestones[i]];
            break;
        }
    }

    message.textContent = text;
});
