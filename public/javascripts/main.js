import Card from "./components/Card.js";
// import Button from "./components/Button.js";

const newCard = new Card(1);

const cardId = newCard.getId();
console.log("new card id is: ", cardId);


// const newButton = new Button();

// const handEl = document.getElementById('hand');
// handEl.appendChild(newButton);

// const playerDiscardIcons = document.getElementsByClassName('info-discard');

$( ".info-discard" ).click(() => {
    console.log('click on discard');
})

// playerDiscardIcon.addEventListener('click', () => {
//     console.log('click on discard');
// });