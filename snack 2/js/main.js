/*
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti fatti" e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
  { name: "Juventus", points: 0, fouls: 0 },
  { name: "Milan", points: 0, fouls: 0 },
  { name: "Inter", points: 0, fouls: 0 },
  { name: "Rimini", points: 0, fouls: 0 },
];

// Genero dei numeri random al posto degli 0 di "points" and "fouls"
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Assegno valori random a "points" e "fouls"
teams.forEach((team) => {
  team.points = getRandomNumber(1, 100);
  team.fouls = getRandomNumber(1, 100);
});

// Creo un nuovo array con solamente "name" e "fouls"
const teamsPlusFouls = teams.map((team) => {
  return { name: team.name, fouls: team.fouls };
});

console.log("Nome squadra e numero di falli subiti", teamsPlusFouls);
