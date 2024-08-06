// Exercice 3
//Créez une fonction normale qui prend un tableau en entrée et renvoie la somme de tous ses éléments
function somme(tableau) {
    let result = 0;
    for (let i = 0; i < tableau.length; i++) {
        result += tableau[i];
    }
    return result;
} 
console.log(somme([1, 2, 3, 4, 5]));

// OU 
function somme(tableau) {
    let somme = 0;
    for (const nombre of tableau) {
        somme += nombre;
    }
    return somme;
}
console.log(somme([1, 2, 3, 4, 5]));

// OU
function somme(tableau) {
    tableau.forEach((nombre, index) => {
        console.log(index);
        somme += nombre;
    });
    return somme;
}
console.log(somme([1, 2, 3, 4, 5]));

// OU 
function somme(tableau) {
    let somme = 0;
    tableau.map((nombre) => (somme += nombre));
    return somme;
}
console.log(somme([1, 2, 3, 4, 5]));
// On utilisera souvent le .map, à préconiser.



// Transformez cette fonction en fonction fléchée
const sommebis = (tableau) => {
    let result = 0;
    for (let i = 0; i < tableau.length; i++) {
        result += tableau[i];
    }
    return result;
} 
console.log(somme([6, 8, 3, 2, 5]));


// reduce
let tab = [45,78,87,34];
const somme = (tab) => {
    tab.reduce((accumulator, valeur) => accumulator + valeur, 0)
}
// l'accumulator est la valeur de départ
console.log(somme(tab));