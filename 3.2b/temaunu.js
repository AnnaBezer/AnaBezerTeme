function createObject ( titluValue, portiiValue, ingredienteArrayValue) {
  let newObject = {
    titlu: titluValue,
    portii:portiiValue,
    ingrediente: ingredienteArrayValue,

  };

  return newObject

}

let reteta = createObject('Pizza', '3', ['sunca', 'cas' , "ketchup" ]);

console.log(reteta.titlu)
console.log(reteta.portii)
console.log(reteta.ingrediente)

// let a = 1;
// while (a <= 10 ) {
//   console.log(a);
//   a = a + 1;
// }

// for (let i=10; i>= 0; i--){
//   //i++ echivalent cu  i = i + 1
//   //i+=2 echiv i = i + 2

//   console.log(i);

// }

// const recursiveFactorial = (n) => {
//   console.log("am intrat in functia recursiveFactorial cu n=" +n);
//   if (n === 1) {
//     return 1;
//   }
//   return n * recursiveFactorial(n-1);
// }

// console.log(recursiveFactorial (10));

// let animals = ['cats', 'dogs', 'birds', "cars"];



// console.log( "rez=" + animals[0].toUpperCase());

// console.log( `rez=${animals[0].toUpperCase()}`);

// const lista = [3,4]
// // const [x, y] = [1, 2];
// const [, y] = lista;

// // console.log(x);
// console.log(y);


const lista = ["ana", "marcel", "cristina"];

  for (let i=0 ; i<=2; i++){
    const nume = lista[i];
    console.log(nume);
  }

  for(const nume of lista){
    console.log(nume);
  }
  
