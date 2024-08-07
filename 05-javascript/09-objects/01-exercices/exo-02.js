// Exercice 2
// Créez un tableau d'objets "personne" avec au moins 3 éléments.
// Parcourez ce tableau à l'aide d'une boucle pour afficher les noms de toutes les personnes.

// Création objets
let personne1 = {
  prenom: "Perrine",
  age: "15",
  ville: "Arras",
};

let personne2 = {
  prenom: "Quentin",
  age: "30",
  ville: "Bruxelles",
};

let personne3 = {
  prenom: "Hélène",
  age: "56",
  ville: "Montfermeil",
};

// Tableau avec les objets
let tabPersonnes = [personne1, personne2, personne3];

// Boucle pour afficher les noms de toutes les personnes
for (let i = 0; i < tabPersonnes.length; i ++) {
  console.log(tabPersonnes[i].prenom);
}

// OU 
for (const personne of tabPersonnes) {
    console.log(personne.prenom);
}

// OU 
tabPersonnes.forEach((personne) => {
    console.log(personne.prenom);
});

// OU
tabPersonnes.map((personne) => { 
    if (personne.age >= 18)
    console.log(personne.prenom);
});


// BONUS
const newtabPersonnes = tabPersonnes.filter((personne) => {
    personne.age >= 18;
});
for (const personne of newtabPersonnes) {
    console.log(personne.prenom);
}