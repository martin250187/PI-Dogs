const arr = [
  { id: "1", temperaments: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"},
  { id: "2", temperaments:	"Aloof, Clownish, Dignified, Independent, Happy"},
];
const filtro = arr.filter((dog) => dog.temperaments.includes("Curious"));
console.log(filtro);
