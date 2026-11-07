console.log("Hello, World!");

const tags = ["spicy", "late night"];
const prices = ["5", "10"];

console.log("tags, prices");

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
    tagText.textContent += tagText.textContent + tags[i] + " . ";
}