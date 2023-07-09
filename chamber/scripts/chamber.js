const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.73&lon=-104.83&units=imperial&appid=e8f65f39b710ea837be37a47db5be40d'
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const banner = document.querySelector('.bannerClose');

var currentDate = new Date()
weekdayValue = currentDate.getDay()
    if (weekdayValue != 1 || weekdayValue != 2 || weekdayValue != 3) {
        document.querySelector('.bannerClose').style.display="none"
        document.querySelector('.bannerText').style.display="none"
        document.querySelector('.banner').style.display="none"
    }


banner.addEventListener("click", () => {
    document.querySelector('.bannerClose').closest (".banner").style.display="none";
});


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt',`${data.weather[0].description}`);
    captionDesc.textContent = `${desc}`;
}


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