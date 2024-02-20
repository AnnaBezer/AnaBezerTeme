// Exercitiul 1
// functie care sa calculeze diferenta dintre 2 numere
// declarare
// template literals
function diferenta(a, b) {
  let rezultat = a - b;
  console.log(`Diferenta dintre numerele ${a} si ${b} este: ${rezultat}`);
  return rezultat;
}

// apelare functie
diferenta(4, 8);
diferenta(6, 23);
diferenta(75, 34);
console.log("-------------------------------------------");

// Exercitiul 2
// Functie pt a calcula patratul unui numar
function patrat(a) {
  // let rezultat = a * a;
  let rezultat = Math.pow(a, 2);
  console.log(`Patratul numarului ${a} este ${rezultat}`);
  return rezultat;
}

patrat(7);
patrat(58);
patrat(21);
console.log("-------------------------------------------");

// Exercitiul 3
// verifica tipul unei date folosind instructiunea switch (boolean, string, number etc)

function verificareTip(variabila) {
  switch (true) {
    case typeof variabila == "string":
      console.log("Variabila '" + variabila + "' este un STRING.");
      break;
    case typeof variabila == "boolean":
      console.log("Variabila " + variabila + " este un BOOLEAN.");
      break;
    case typeof variabila == "number":
      console.log("Variabila " + variabila + " este un NUMBER.");
      break;
    default:
      console.log("Tipul este nedefinit");
      break;
  }
}

verificareTip("un sir de date");
verificareTip(53578);
verificareTip(true);
verificareTip(undefined);
console.log("-------------------------------------------");

// Exercitiul 4
// verifica daca un numar este multiplu al unui alt numar
function verificareMultiplu(multiplu, numar) {
  if (multiplu % numar == 0) {
    console.log(`Numarul ${multiplu} este multiplu pentru numarul ${numar}`);
  } else {
    console.log(`Numarul ${multiplu} NU ESTE multiplu pentru numarul ${numar}`);
  }
}

verificareMultiplu(6, 2);
verificareMultiplu(45, 6);
verificareMultiplu(100, 10);
console.log("-------------------------------------------");
//Exercitiul 5
// Scrieti o functie aria unui patrat/dreptunghi/cerc/triunghi

//Exercitiul 6
// Scrieti o functie care sa simuleze comportamentul unui zar
function aruncaZar() {
  const rezultat = (Math.floor((Math.random() * 6) + 1));
  console.log("Zar: " + rezultat);
  return rezultat;
}

aruncaZar();