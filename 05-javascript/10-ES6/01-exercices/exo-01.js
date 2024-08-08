// Exercice 1 
// Créer quelques objets "voiture" (min 3) => 2 attributs : marque et puissance

// Mettre ces objets dans un tableau 

// Créer une fonction qui prend en paramètre le tableau et une marque recherchée 
// => nous renvoie le nombre de voitures trouvées 

// Obligation d'utiliser uniquement la destructuration et le spread operator
// pas de voiture.marque etc dans le code


// création objets 
const voiture1 = {
    marque: 'Renault', 
    puissance: 95,
};
const voiture2 = {
    marque: 'Citroën', 
    puissance: 120,
};
const voiture3 = {
    marque: 'Renault', 
    puissance: 105,
};

// mettre les objets dans un tableau
let tabVoitures = [voiture1, voiture2, voiture3]; 
console.log(tabVoitures);

// function rechercheParMarque(tabVoitures, marque) {
//     let result = 0;
//     let marqueSaisie = '.';
//     if marqueSaisie === tabVoitures.marque {
//         result = result + 1;
//     };
//     return result;
    // console.log(`Il y a ${result} de la marque ${marqueSaisie}`);
// }




// rechercheParMarque('renault', ??) // => nombre de voiture trouvées

// 3 fois (...)