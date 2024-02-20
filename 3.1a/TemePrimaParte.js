//Exe.1
// Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. Daca numărul de produse este peste 5 ( inclusiv ) afișează în consola “Ai transport gratuit”.

let NrProduseCos = 10;
if (NrProduseCos > 5) {
  console.log("Ai transport gratuit.");
} else {
  console.log(" Se aplica cost pentru transport.")
}
//Exe.2
// Sa se creeze o variabila reprezentand numărul de produse pe care le are un user în cos. Daca numărul de produse este peste 5 afișează în consola “Ai transport gratuit”, altfel sa se afișeze “Mai adauga X produse ca sa ai transport gratuit”. X reprezintă diferența pana la 5. 
let NrProduseCos = 10;
if (NrProduseCos < 5) {
  console.log("Ai transport gratuit.");
} else {
  console.log(" Mai adauga X produse ca sa ai transport gratuit.")
}
//Exe.3
//Sa se creeze o funcție care primește un parametru ( știm ca e de tip number ), iar functia sa returneze true dacă valoarea parametrului este mai mai mare decât 5, iar în caz contrar sa returneze false.
let verificareTip= (variabila) => {
  if (typeof variabila == "number") { 
    console.log("Variabila " + variabila + " este un NUMBER.");
  } else {
    console.log(false);
  }
} 
verificareTip(5);
verificareTip(" WORD ");
//Exe.4
// Sa se creeze o funcție care primește doi parametri ( știm ca amandoi sunt de tip number ), iar functia sa returneze true dacă suma celor doi este mai mai mare decât 10, iar în caz contrar sa returneze false.
function sum(a,b) {

  const rez= ( a+ b > 10 ) ? "adevarat" : "fals" ;
  return rez;
}

console.log(sum(3, 6));

// sau 
let suma = (a, b) => {
  if((a + b) > 10) {
    return true;
  } else return false;

}
console.log(suma(5, 6));
//Exe.5
//Sa se creeze o funcție care primește un parametru ( știm ca e de tip string ). Funcția sa afișeze în consola valoarea parametrului. De exemplu, daca apelam funcția cu parametrul “Hello”, în consola va trebui sa vedem “Hello”
let parametruString = (variabila) => {
  if(typeof variabila === "string") {
    console.log( variabila + "Este un string");
  } else {
    console.log(false)
  }

}

parametruString(" Hello ");
parametruruString(123);
//Exe.6
// Sa se creeze o funcție care primește un parametru ( știm ca e de tip string ). Funcția sa returneze lungimea lui. De exemplu, dacă apelam funcția cu parametrul “Hello”, in consola va trebui sa vedem 5
for (let i = 0; i < 1; i++) {
  console.log('Hello');
  }

//Exe.For, a)
for (let i = 0; i < 7; i++) {
  console.log('Text repetitiv');
  }
//Exe. for , b)
for (let i = 0; i < 1; i++) {
  console.log('Repetiția 1 , Repetiția 2 , Repetiția 3 , Repetiția 4 , Repetiția 5 , Repetiția 6 , Repetiția 7 , Repetiția 8 , Repetiția 9 , Repetiția 10 ');
  }
  //sau 
  let repetitia = ['Repetiția 1 , Repetiția 2 , Repetiția 3 , Repetiția 4 , Repetiția 5 , Repetiția 6 , Repetiția 7 , Repetiția 8 , Repetiția 9 , Repetiția 10 '];
for (let i = 0;i < repetitia.length;i++) {
console.log(repetitia);
}
//Exe. for , c)
let returneazaArrayNrPare = (array) => {

  let arrayNrPare = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayNrPare.push(array[i]);
    }
  }
  return arrayNrPare;
}
console.log(returneazaArrayNrPare([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// Exe, for d) 
//Folosind un for loop sa se afișeze numerele pare de la 10 la 20 - varianta 2 ( fără sa crești i-ul cu 2 după fiecare repetiție - gen soluția pusă de SImi )
// nu am inteles conditia.
// Exe, for e)
//Folosind un for loop sa se afișeze multiplii de 5 de la 0 la 48 ( fara sa cresti i-ul cu 5 dupa fiecare repetitite )
// nu am inteles conditia.
// Exe, for f)
let produse = [
  {
    name: `Produs 1`,
    costa: 5,
  },
  {
    name: `Produs 2`,
    costa: 19,
  },
  {
    nume:`Produs 3`,
    costa: 25,
  },
  {
    name: `Produs 4`,
    costa: 37,
  },
  {
    name: `Produs 5`,
    costa: 43,
  }
];

console.log(produse);
// Exe, for g)
//Sa se creeze un array de 6 elemente de tip string reprezentând nume de persoane. Folosind un for loop sa se afișeze in consola numărul de caractere al fiecărui nume
// nr of caracters ??
let str = ("Tom" + "Matthew" + "James" + "Leo" + "Mark");
for (var i = 0; i < str.length; i++) {
  console.info(str[i]);
}
// Exe, for h)
let array = [1, 34, 3, 22, 5];
let thirdElement = array[3];

console.log(thirdElement);
// Exe, for i)
//Sa se creeze o funcție care primește ca parametru un array cu elemente de tip Number și returneaza true dacă al 2-lea element din array este par, in caz contrar returnează false
// don't know
let verificareNrPar = (array) => {

  for (let i=0 ; i<(nr%2 === 0)? "adevarat" : "fals"; i++) {
    if (array[i]>maximArray){
      maximArray = array[i];
  }
  }
  }
  array = [1,2,3,4,5,6,7,8,9,10];
  console.log(verificareNrPar(array))
// Exe, for l)
//// don't know
let returneazaPrimulNrPar = (array) => {
  let minim = array[0]; 
  let indexValoareMinima = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minim && array[i] % 2 === 0) {
      minim = array[i];
      indexValoareMinima = i;
    }
  }

  return indexValoareMinima;

};

console.log(returneazaPrimulNrPar([6, 7, 4, 10, 23, 0]));