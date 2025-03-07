// DOM TECHNIQUES

//ADD ELEMENT TO PAGE

// Set variable to element we want to add
const body = document.body;
console.log(body);

body.append("Hello World");
// Crate Elements
const div = document.createElement("div");

// 2 ways to add text to this div
div.innerHTML = "<strong>Hello World</strong>";
div.textContent = "Hello World";