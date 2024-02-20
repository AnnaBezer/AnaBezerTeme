function tellFortune(numarCopii, numePartener, locatieGeografica, locMunca) 
{
  return "Vei fi un " + locMunca + " in " + locatieGeografica + ", casatorit cu " + numePartener + " si vei avea " + numarCopii + " copii." ;
}


locMunca = "Senior front-end developer";
numarCopii = "3";
numePartener = "ABCDE";
locatieGeografica = "Elvetia";

const rez1= tellFortune(numarCopii, numePartener, locatieGeografica, locMunca);

console.log(rez1);