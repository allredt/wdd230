let newVisit = Date.now();

let lastVisit = Date.now();

let elapsed = (lastVisit-newVisit)/1000;

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}if (elapsed <= 86400) {
	visitsDisplay.textContent = `Back so soon! Awesome!`;
}
 else {
	visitsDisplay.textContent = `Visits: ${numVisits()}`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

let text = document.lastModified;

document.getElementById("lastModified").innerHTML = `Last Modified: ${text}`;

let year = new Date(document.lastModified)
document.getElementById("year").innerHTML = `&copy; ${year.getFullYear()}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});