const baseURL = "https://allredt.github.io/wdd230/";
const linksURL = "https://allredt.github.io/wdd230/data/links.json";
const cards = document.querySelector('#list')

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.weeks);
    displayLinks(data.weeks);
  }
  
getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let card = document.createElement('li');
        card.textContent = `${week.week}: `;
        // card.appendChild(card);

        week.links.forEach((links) => {
            let link = document.createElement('a')
            link.setAttribute('href', links.url);
            link.textContent = ` ${links.title} |`;

            console.log(link)
            card.appendChild(link)
        })
        
        cards.appendChild(card);
    });
}