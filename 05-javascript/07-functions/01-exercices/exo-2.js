// Exercice 2
// Créez une fonction normale qui prend deux nombres en entrée et renvoie leur somme

// Transformez cette fonction en fonction fléchée

function somme (a, b){
    const result = a + b;
    return result;
}
console.log(somme(4, 5));


// fonction fléchée
const sommebis = (a, b) => a + b; // on peut se passer du return parce qu'on stock dans une variable
console.log(sommebis(6, 5));

// autrement
const somme3 = (a, b) => {
    const result = a + b;
    return result;
}
console.log(somme3(7, 5));