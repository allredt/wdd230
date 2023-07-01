const pswd = document.querySelector("#pswd");
const pswd2 = document.querySelector("#pswd2");
const message = document.querySelector("#errormmessage");

pswd2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pswd.value !== pswd2.value) {
		message.textContent = "❗Passwords do NOT match!";
		message.style.visibility = "show";
		pswd2.style.backgroundColor = "#fff0f3";
		pswd2.value = "";
		pswd2.focus();
	} else {
		message.style.display = "none";
		pswd2.style.backgroundColor = "#fff";
		pswd2.style.color = "#000";
	}
}

// const kp1 = document.querySelector("#pswd");
// const kp2 = document.querySelector("#pswd2");
// const message = document.querySelector("#errormmessage");

// kp2.addEventListener("focusout", checkSame);

// // This should be refactored.
// function checkSame() {
// 	if (kp1.value !== kp2.value) {
// 		message.textContent = "❗Passwords do NOT match!";
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

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}