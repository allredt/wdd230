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

//-----------password check-----------//
// const kp1 = document.querySelector("#keyphrase");
// const kp2 = document.querySelector("#keyphrase2");
// const message = document.querySelector("#formmessage");
 
// kp2.addEventListener("focusout", checkSame);

// // This should be refactored.
// function checkSame() {
// 	if (kp1.value !== kp2.value) {
// 		message.textContent = "❗Key Phrases DO NOT MATCH!";
// 		message.style.visibility = "show";
// 		kp2.style.backgroundColor = "#fff0f3";
// 		kp2.value = "";
// 		kp2.focus();
// 	} else {
// 		message.style.display = "none";
// 		kp2.style.backgroundColor = "#fff";
// 		kp2.style.color = "#000";
// 	}
// }

let text = document.lastModified;

document.getElementById("lastModified").innerHTML = `Last Modified: ${text}`

let year = new Date(document.lastModified)
document.getElementById("year").innerHTML = `&copy; ${year.getFullYear()}`

// Initialize display element 
// variable
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);


