// Exercice 1

// Utilisez une instruction "if" pour vérifier si une variable "age" est supérieure à 18. 
// Si c'est le cas, affichez "majeur" à l'aide de console.log(). 
// Sinon, affichez "mineur".

let age = 18;
if (age >= 18) {
    console.log("majeur");
} else {
    console.log("mineur");
}

switch (age) {
    case (age >= 18):
        console.log("majeur");
        break;
    default:
        console.log("mineur");
        break;
}
