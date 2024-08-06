let age = 19;
let sexe = "femme";

// if (age >= 18) {
//     console.log("majeur");
// } else {
//     console.log("mineur");
// }


//ternaire : 
// condition ? retour si vrai : retour si faux;
const result = (age >= 18) ? "majeur" : "mineur";

console.log(result);

// ternaire dans du ternaire
// const result = (age >= 18) ? sexe == "femme" ? "non concernée" : "majeur" : "mineur";

// console.log(result);