// TYPES DE DONNEES
// -----------------

// number
let num = 23;
// débogage 
// bonnes habitudes: mettre le nom de la variable au début de console.log pour savoir de quelle variable il s'agit
console.log('num :', typeof num, num);


// string
let str = "test";
// débogage 
console.log('str :', typeof str, str);


// boolean
let bool = true; // ou false
// débogage
console.log('bool :', typeof bool, bool);
bool = !bool; // le point d'exclamation inverse la valeur (ne fonctionne pas qu'avec les booléens)
console.log('bool :', typeof bool, bool);


// null
let nothing = null;
// débogage
console.log('null :', typeof null, null);

// array
let tab = [1, 2, 3, 4, 5];
// débogage
console.log('tab :', typeof tab, tab);