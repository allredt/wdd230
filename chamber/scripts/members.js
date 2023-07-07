// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const url = 'https://allredt.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

const displaymembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.textContent = `${member.name}`;

        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function getMemberData () {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

// const displaymembers = (members) => {
//     members.forEach((member) => {

//         let card = document.createElement('section');
//         let fullName = document.createElement('h2');
//         let portrait = document.createElement('img');

//         fullName.textContent = `${member.name}`;

//         portrait.setAttribute('src', member.image);
//         portrait.setAttribute('alt', `Portrait of ${member.name}`);
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '340');
//         portrait.setAttribute('height', '440');

//         card.appendChild(fullName);
//         card.appendChild(portrait);
//         cards.appendChild(card);
//     });
// }

// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {

        // let card = document.createElement('section');
        // let fullName = document.createElement('h2');
        // let portrait = document.createElement('img');

        // fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // portrait.setAttribute('src', prophet.imageurl);
        // portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        // portrait.setAttribute('loading', 'lazy');
        // portrait.setAttribute('width', '340');
        // portrait.setAttribute('height', '440');

        // card.appendChild(fullName);
        // card.appendChild(portrait);
        // cards.appendChild(card);
//     });
// }

getMemberData();