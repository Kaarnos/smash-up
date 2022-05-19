import Card from "./components/Card.js";

const newCard = new Card(1);

const cardId = newCard.getId();

console.log("new card id is: ", cardId);