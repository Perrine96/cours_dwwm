// objet
const user = {
    nom: 'test', 
    prenom: 'toto',
    age: 56,
    taille: 'petit'
};

// destructuring
const {nom, prenom, age, taille} = user;

// affichage
console.log(nom);
console.log(prenom);
console.log(age);
console.log(taille);