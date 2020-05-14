/////////////////////////////////
//          EXERCISES          //
/////////////////////////////////


// 1. Funktionen können andere Funktionen aufrufen.
const names = ["paul", "paula", "nicolas", "anna"];

const greeter = (name) => {
  console.log(`hello ${name}`)
}


const useGreeter = () => {
  // Rufe hier in einem loop die greeter funktion für alle namen in dem array auf.
}

useGreeter();


// 2. Funktionen können Funktionen übergeben werden.
const plus2 = (x) => {
  return x + 2;
}

const addieren = (zahl, matheFunktion) => {
  console.log(/* hier soll die matheFunktion korrekt aufgerufen werden.*/);
}

addieren(10, plus2); // Hier soll 12 rauskommen.


// 3. Funktionen können beliebig viele Funktionen übergeben werden.
const mal2 = (x) => {
  return x * 2;
}

const mal3 = (x) => {
  return x * 3;
}

const mehrmalsMultiplizieren = (zahl, funktion1, funktion2) => {
  console.log(/*Hier sollen mal2 und mal3 korrekt aufgerufen werden.*/);
}

mehrmalsMultiplizieren(100, mal2, mal3);  // Hier soll 600 rauskommen


// 4. Callback funktionen können anonyme funktionen sein.
const machMathe = (zahl, matheFunktion) => {
  console.log(matheFunktion(zahl));
}

machMathe(100, (x) => {/* die zahl soll hier durch 20 geteilt werden.*/}); //Hier soll 5 rauskommen.


// 5. Callback funktionen können selber callback funktionen haben.
const minus3 = (x, danachFunktion) => {
  const result = x-3;
  danachFunktion(result);
}

const positivOderNegativ = (zahl, minusFunktion) => {
  minusFunktion(zahl, (result) => {
    // Wenn das result positiv ist, soll "positive zahl" rauskommen, sonst "negative zahl".
  });
}

positivOderNegativ(2, minus3); // Hier soll "negative Zahl rauskommen".


// 6. Callback Hell Beispiel. Hier musst du gar nichts machen. 
const geteiltDurch3 = (x, danachFunktion) => {
  const result = x/3;
  danachFunktion(result);
}

const geteiltDurch7 = (x, danachFunktion) => {
  const result = x/7;
  danachFunktion(result);
}

const geteiltDurch5 = (x, danachFunktion) => {
  const result = x/5;
  danachFunktion(result);
}

// Wir führen geben den funktionen immer weiter innere Funktionen.
const durch5durch7durch3 = (zahl) => { 
  geteiltDurch5(zahl, (result1) => { 
    geteiltDurch7(result1, (result2) => {
      geteiltDurch3(result2, (result3) => { 
        console.log(result3); 
      });
    });
  });
}

durch5durch7durch3(2415); // 23


//7. Schreibe deine eigene Callback Hell

const minus30 = (x, danachFunktion) => {
  const result = x-30;
  danachFunktion(result);
}

const minus7 = (x, danachFunktion) => {
  const result = x-7;
  danachFunktion(result);
}

const minus5 = (x, danachFunktion) => {
  const result = x-5;
  danachFunktion(result);
}


const minus5minus7minus30 = (zahl) => { 
  // Schreibe hier eine callback hell ähnlich wie in 6. 
}

minus5minus7minus30(2415); // 2373


/////////////////////////////////
//           SOLUTION          //
/////////////////////////////////

console.log("AUFGABE 1:");
// 1. Funktionen können andere Funktionen aufrufen.
const names = ["paul", "paula", "nicolas", "anna"];

const greeter = (name) => {
  console.log(`hello ${name}`);
};

const useGreeter = (nameInput) => {
  // Rufe hier in einem loop die greeter funktion für alle namen in dem array auf.
  return greeter(nameInput);
};

useGreeter("Niels");

console.log("AUFGABE 2:");
// 2. Funktionen können Funktionen übergeben werden.
const plus2 = (x) => {
  return x + 2;
};

const addieren = (zahl, matheFunktion) => {
  console.log(matheFunktion(zahl));
};

addieren(10, plus2); // Hier soll 12 rauskommen.

console.log("AUFGABE 3:");
// 3. Funktionen können beliebig viele Funktionen übergeben werden.
const mal2 = (x) => {
  return x * 2;
};

const mal3 = (x) => {
  return x * 3;
};

const mehrmalsMultiplizieren = (zahl, funktion1, funktion2) => {
  console.log(funktion2(funktion1(zahl)));
};

mehrmalsMultiplizieren(100, mal2, mal3); // Hier soll 600 rauskommen

console.log("AUFGABE 4:");
// 4. Callback funktionen können anonyme funktionen sein.
const machMathe = (zahl, matheFunktion) => {
  console.log(matheFunktion(zahl));
};

machMathe(100, (x) => {
  /* die zahl soll hier durch 20 geteilt werden.*/
  return (x = x / 20);
}); //Hier soll 5 rauskommen.

console.log("AUFGABE 5:");
// 5. Callback funktionen können selber callback funktionen haben.
const minus3 = (x, danachFunktion) => {
  const result = x - 3;
  danachFunktion(result);
};

const positivOderNegativ = (zahl, minusFunktion) => {
  minusFunktion(zahl, (result) => {
    // Wenn das result positiv ist, soll "positive zahl" rauskommen, sonst "negative zahl".
    if (result >= 0) {
      console.log("Positive Number");
    } else {
      console.log("Negative Number");
    }
  });
};

positivOderNegativ(2, minus3); // Hier soll "Negative Number rauskommen".
positivOderNegativ(5, minus3); // Hier soll "positive Number rauskommen".

console.log("AUFGABE 6:");
// 6. Callback Hell Beispiel. Hier musst du gar nichts machen.
const geteiltDurch3 = (x, danachFunktion) => {
  const result = x / 3;
  danachFunktion(result);
};

const geteiltDurch7 = (x, danachFunktion) => {
  const result = x / 7;
  danachFunktion(result);
};

const geteiltDurch5 = (x, danachFunktion) => {
  const result = x / 5;
  danachFunktion(result);
};

// Wir führen geben den funktionen immer weiter innere Funktionen.
const durch5durch7durch3 = (zahl) => {
  geteiltDurch5(zahl, (result1) => {
    geteiltDurch7(result1, (result2) => {
      geteiltDurch3(result2, (result3) => {
        console.log(result3);
      });
    });
  });
};

durch5durch7durch3(2415); // 23

console.log("AUFGABE 7:");
//7. Schreibe deine eigene Callback Hell

const minus30 = (x, danachFunktion) => {
  const result = x - 30;
  danachFunktion(result);
};

const minus7 = (x, danachFunktion) => {
  const result = x - 7;
  danachFunktion(result);
};

const minus5 = (x, danachFunktion) => {
  const result = x - 5;
  danachFunktion(result);
};

const minus5minus7minus30 = (zahl) => {
  // Schreibe hier eine callback hell ähnlich wie in 6.
  minus5(zahl, (result1) => {
    minus7(result1, (result2) => {
      minus30(result2, (result3) => {
        console.log(result3);
      });
    });
  });
};

minus5minus7minus30(2415); // 2373
console.log("AUFGABE 1:");
// // 1. Funktionen können andere Funktionen aufrufen.
// const names = ["paul", "paula", "nicolas", "anna"];

// const greeter = (name) => {
//   console.log(`hello ${name}`);
// };

// const useGreeter = (nameInput) => {
//   // Rufe hier in einem loop die greeter funktion für alle namen in dem array auf.
//   return greeter(nameInput);
// };

// useGreeter("Niels");

// console.log("AUFGABE 2:");
// // 2. Funktionen können Funktionen übergeben werden.
// const plus2 = (x) => {
//   return x + 2;
// };

// const addieren = (zahl, matheFunktion) => {
//   console.log(matheFunktion(zahl));
// };

// addieren(10, plus2); // Hier soll 12 rauskommen.

// console.log("AUFGABE 3:");
// // 3. Funktionen können beliebig viele Funktionen übergeben werden.
// const mal2 = (x) => {
//   return x * 2;
// };

// const mal3 = (x) => {
//   return x * 3;
// };

// const mehrmalsMultiplizieren = (zahl, funktion1, funktion2) => {
//   console.log(funktion2(funktion1(zahl)));
// };

// mehrmalsMultiplizieren(100, mal2, mal3); // Hier soll 600 rauskommen

// console.log("AUFGABE 4:");
// // 4. Callback funktionen können anonyme funktionen sein.
// const machMathe = (zahl, matheFunktion) => {
//   console.log(matheFunktion(zahl));
// };

// machMathe(100, (x) => {
//   /* die zahl soll hier durch 20 geteilt werden.*/
//   return (x = x / 20);
// }); //Hier soll 5 rauskommen.

// console.log("AUFGABE 5:");
// // 5. Callback funktionen können selber callback funktionen haben.
// const minus3 = (x, danachFunktion) => {
//   const result = x - 3;
//   danachFunktion(result);
// };

// const positivOderNegativ = (zahl, minusFunktion) => {
//   minusFunktion(zahl, (result) => {
//     // Wenn das result positiv ist, soll "positive zahl" rauskommen, sonst "negative zahl".
//     if (result >= 0) {
//       console.log("Positive Number");
//     } else {
//       console.log("Negative Number");
//     }
//   });
// };

// positivOderNegativ(2, minus3); // Hier soll "Negative Number rauskommen".
// positivOderNegativ(5, minus3); // Hier soll "positive Number rauskommen".

// console.log("AUFGABE 6:");
// // 6. Callback Hell Beispiel. Hier musst du gar nichts machen.
// const geteiltDurch3 = (x, danachFunktion) => {
//   const result = x / 3;
//   danachFunktion(result);
// };

// const geteiltDurch7 = (x, danachFunktion) => {
//   const result = x / 7;
//   danachFunktion(result);
// };

// const geteiltDurch5 = (x, danachFunktion) => {
//   const result = x / 5;
//   danachFunktion(result);
// };

// // Wir führen geben den funktionen immer weiter innere Funktionen.
// const durch5durch7durch3 = (zahl) => {
//   geteiltDurch5(zahl, (result1) => {
//     geteiltDurch7(result1, (result2) => {
//       geteiltDurch3(result2, (result3) => {
//         console.log(result3);
//       });
//     });
//   });
// };

// durch5durch7durch3(2415); // 23

// console.log("AUFGABE 7:");
// //7. Schreibe deine eigene Callback Hell

// const minus30 = (x, danachFunktion) => {
//   const result = x - 30;
//   danachFunktion(result);
// };

// const minus7 = (x, danachFunktion) => {
//   const result = x - 7;
//   danachFunktion(result);
// };

// const minus5 = (x, danachFunktion) => {
//   const result = x - 5;
//   danachFunktion(result);
// };

// const minus5minus7minus30 = (zahl) => {
//   // Schreibe hier eine callback hell ähnlich wie in 6.
//   minus5(zahl, (result1) => {
//     minus7(result1, (result2) => {
//       minus30(result2, (result3) => {
//         console.log(result3);
//       });
//     });
//   });
// };

// minus5minus7minus30(2415); // 2373
