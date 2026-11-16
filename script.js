// Interactive Greeting Feature
const greetBtn = document.getElementById("greetBtn");
const greetingMsg = document.getElementById("greetingMsg");

if (greetBtn) {
    greetBtn.addEventListener("click", function() {
        greetingMsg.textContent = "👋 Thanks for stopping by! Hope you have a wonderful day ahead.";
    });
}

// Dark Mode Toggle Feature
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

// Check saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeIcon) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}

if (themeToggle) {
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }
        } else {
            localStorage.setItem("theme", "light");
            if (themeIcon) {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-moon");
            }
        }
    });
}
