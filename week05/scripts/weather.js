const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.63}&units={imperial}&appid={37e60025947c5df0ea4bf0e227b4afb7}'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

apiFetch();

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${weather}.`;
//     let desc = data.weather[0].;
//     weatherIcon.setAttribute(',');
//     weatherIcon.setAttribute(',');
//     captionDesc.textContent = `${desc}`;
// }