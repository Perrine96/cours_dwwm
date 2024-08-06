// Exercice 1

// initialiser 3 variables mot1, mot2 et mot3
let mot1 = "poire";
let mot2 = "banane";
let mot3 = "pomme";

// savoir s'ils sont dans l'ordre alphabétique
if ((mot1 < mot2) && (mot2 < mot3)) {
    console.log(mot1 + ", " + mot2 + " et " + mot3 +  " sont dans l'ordre alphabétique");
}
else {
    console.log(`${mot1}, ${mot2} et ${mot3} ne sont pas dans l'ordre alphabétique`);
}