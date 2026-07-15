

/* bg blanco / negro */
const html = document.documentElement;
const btn = document.getElementById("theme-toggle");

// Recuperar la preferencia
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    html.classList.add("light");
}

btn.addEventListener("click", () => {
    html.classList.toggle("light");

    if (html.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});