// Exercice 1

// Créez une fonction normale qui prend un nombre en entrée et renvoie son carré

// Transformez cette fonction en fonction fléchée 


// résultat attendu :
// console.log(carre(4)); // 16
// console.log(carre(5)); // 25
// etc... 

function carre(nombre) {
    let result = nombre * nombre;
    return result;
}
console.log(carre(4));
console.log(carre(5));

const carrebis = nombre => nombre * nombre;
console.log(carrebis(4));
console.log(carrebis(5));

