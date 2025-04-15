// main.js

document.addEventListener("DOMContentLoaded", () => {
    const translateButton = document.createElement("button");
    translateButton.textContent = "Translate";
    translateButton.style.position = "absolute";
    translateButton.style.top = "10px";
    translateButton.style.right = "10px";
    document.body.appendChild(translateButton);

    translateButton.addEventListener("click", () => {
        const elementsToTranslate = document.querySelectorAll("[data-translate]");
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-translate");
            element.textContent = translations[key] || element.textContent;
        });
    });
});

const translations = {
    hello: "Hola",
    welcome: "Bienvenido",
    goodbye: "Adiós",
};

// Example usage in HTML:
// <p data-translate="hello">Hello</p>
// <p data-translate="welcome">Welcome</p>
