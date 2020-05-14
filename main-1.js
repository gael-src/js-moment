// 1. Funktionen können andere Funktionen übergeben werden.
const names = ["paul", "paula", "nicolas", "anna"];
const grueßGott = (name) => {
  console.log(`servus ${name}!`);
} 
const meineFunktion = (grußFunktion) => {
  for(name of names){
    grußFunktion(name);
  }
}
meineFunktion(grueßGott);
// 2. beispiel
const plus2 = (x) => {
  return x + 2;
}
const plus7 = (x) => {
  return x + 7;
}
const addieren = (zahl, matheFunktion) => {
  console.log(matheFunktion(zahl));
}
addieren(5, plus2); 
addieren(7, plus7); // 14
// Es können beliebig viele funktionen übergeben werden.
const mal2 = (x) => {
  return x * 2;
}
const mal3 = (x) => {
  return x * 3;
}
const mehrmalsMultiplizieren = (zahl, funktion1, funktion2) => {
  console.log(funktion2(funktion1(zahl)));
}
mehrmalsMultiplizieren(10, mal2, mal3); //60
// Callback funktionen können anonyme funktionen sein.
const machMathe = (zahl, matheFunktion) => {
  console.log(matheFunktion(zahl));
}
machMathe(100, (x) => { return x / 5 }); // 20
// Callback funktionen können auch selber callback funktionen haben
const minus3 = (x, danachFunktion) => {
  const result = x - 3;
  danachFunktion(result);
}
const positivOderNegativ = (zahl, minusFunktion) => {
 minusFunktion(zahl, (result) => {
    if(result >= 0){
      console.log("positiv");
    } else {
      console.log("negativ");
    }
  });
}
positivOderNegativ(2, minus3);
