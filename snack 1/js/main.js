/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
  { name: "Bici A", weight: 7.2 },
  { name: "Bici B", weight: 6.8 },
  { name: "Bici C", weight: 7.5 },
  { name: "Bici D", weight: 6.7 },
  { name: "Bici E", weight: 7.0 },
];

let lightestBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightestBike.weight) {
    lightestBike = bikes[i];
  }
}

console.log("La bici con il peso minore è:", lightestBike);
