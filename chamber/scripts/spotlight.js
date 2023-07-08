const murl = 'https://allredt.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getMemberData () {
    const response = await fetch(murl);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let address = document.createElement('p')
        let website = document.createElement('a')
        let membership = document.createElement('p');

        fullName.textContent = `${member.name}`;
        console.log(fullName)

        address.textContent = `Address: ${member.address}`;
        console.log(website);

        membership.textContent = `${member.membershipLevel} Member`


        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '500');
        portrait.setAttribute('height', '250');

        website.setAttribute('href', member.website);
        website.textContent = `${member.website}`;

        console.log(member)

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);
        cards.appendChild(card);
    });
}

getMemberData();