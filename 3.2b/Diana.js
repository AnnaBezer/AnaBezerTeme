const pi = 3.14;
console.log(`Valoarea lui pi este` , pi);
console.log("Tipe of pi este" , typeof pi);

let nume = `George`;
console.log(`Nume: `, nume);
nume = `Andreea`;
console.log(`Nume: `, nume);
console.log("Tipe of pi este" , typeof nume);


console.log(`..............`);
console.log("OPERATORI");
let rezultat = 2+5;
console.log(`Rezultat: `, rezultat);

let n = 10%3;
console.log("N-operator mod: ", n);

let esteEgal = 4 !== `8`;
console.log(" Este egal: ", esteEgal);
console.log("Tipe of pi este" , typeof esteEgal);

//concatenare +
console.log("text 1 " + "text 2");
console.log("3" + 3);


let variabila1 = null;
console.log("variabila1: ", variabila1);

console.log(`..........................`);
console.log("IF-ELSE Structura");

let nota= 6;
if (nota >= 5) {
  console.log("Felicitari, promovat!");
} else {
  console.log("Elevul nu a trecut examenul");
}

// Operator ternar
let notaDeTrecere = nota >= 5 
  ? console.log("Elevul nu a trecut examenul") 
  : console.log("Felicitari, promovat!");

// If-ELSE cu 3 conditii
let pretBilet = 0;
let varstaPersoana = 20;
if (varstaPersoana < 5) {
  console.log(`Pretul unui bilet este ${pretBilet}`);
} else if (varstaPersoana >= 5 && varstaPersoana <= 18) {
  console.log("Pretul unui bilet este de 10 lei");
} else {
  console.log("Pretul unui bilet este de 20 lei");
}

console.log(`..........................`);
console.log("IF-SWITCH Structura");
let lunaDinAn = 1;
switch (lunaDinAn) {
  case 1:
    console.log("Ianuarie");
    break;
  case 2:
    console.log("Februarie");
    break;
  case 3:
    console.log("Martie");
    break;
  case 4:  
    console.log("Aprilie");
    break;
  case 5:
    console.log("Mai");
    break;
  case 6:
    console.log("Iunie");
    break;
  default:
    console.log("Nu exista luna a anului asociata cu acest numar");
}
console.log(`..........................`);
console.log("Functie");
// declaram functia
function substractNumber(a, b) {
 console.log(a - b);
}

//apelam functia - call
substractNumber(20, 3);
substractNumber(15, 6);
substractNumber(13, 3);
substractNumber(13000, 30);