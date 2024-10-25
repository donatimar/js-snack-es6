/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

function getValues(array, a, b) {
  if (a >= b) {
    console.error("A deve essere minore di B");
    return [];
  }

  const newArray = array.slice(a, b);
  return newArray;
}

const a = parseInt(prompt("Inserisci il valore di A"), 10);
const b = parseInt(prompt("Inserisci il valore di B"), 10);

const myArray = [1, 2, 3, 4, 5];
const result = getValues(myArray, a, b);
console.log(result);
