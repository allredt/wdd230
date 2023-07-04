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

let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener('click', () => {
	let timestamp = new Date.now()
	document.getElementById("tstamp").innerHTML = `${timestamp()}`;

});