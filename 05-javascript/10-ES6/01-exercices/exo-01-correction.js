// Ecrire ça en haut de notre fichier pour éviter d'écrire node dans le terminal
// #!/usr.bin/env node

// Exercice 1 - CORRECTION

// Création tableau vide 
let tabVoitures = []; 

// création d'objets
const voiture1 = {
    marque: 'renault', 
    puissance: 95,
};
const voiture2 = {
    marque: 'citroën', 
    puissance: 120,
};
const voiture3 = {
    marque: 'renault', 
    puissance: 105,
};

// On reprend le tableau vide et on y ajoute nos objets
tabVoitures = [...tabVoitures, voiture1, voiture2, voiture3];
console.log(tabVoitures);

// Création de la fonction
function rechercheParMarque(marqueRecherchee, ...args) {
    let cpt =0;
    for (const voiture of args) {
        const { marque } = voiture;
        if (marqueRecherchee === marque) {
            cpt++
        }
    }
    // console.log(`Il y a ${cpt} voiture(s) de la marque ${marqueRecherchee}.`)
    // ternaire : 
    console.log(`${cpt > 0 ? "Il y a " + cpt : "Il n'y a aucune"} voiture(s) de la marque ${marqueRecherchee}.`)
}


rechercheParMarque('renault', ...tabVoitures);