console.log("Hello World");
// import characters from './data.json';

/*
const characters = [
    { image: "https://static.wikia.nocookie.net/onepiece/images/7/7b/Vinsmoke_Judge_Portrait.png/", name: "Judge" },
    { image: "https://static.wikia.nocookie.net/onepiece/images/7/74/Vinsmoke_Reiju_Portrait.png/", name: "Reiju" },
    // ... more character objects
  ];
*/

console.log(characters);

const gallery = document.querySelector(".gallery");

function generateCardHTML(character) {
  return `
    <div class="card">
      <img src="${character.image}" alt="${character.name}">
      <span>${character.name}</span>
    </div>
  `;
}

characters.forEach(character => {
  const cardHTML = generateCardHTML(character);
  gallery.innerHTML += cardHTML;
});
