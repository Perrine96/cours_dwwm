let nomObjet = {};
console.log(typeof nomObjet); // => object

// tout ce qu'on met dans l'objet est ce qui caractérise l'objet
let personne = {
    // clé + sa valeur
    // pour mettre plusieurs clés, on les sépare d'une virgule
    nom: 'Mallard', 
    prenom: 'Perrine', 
    age: 18,
};
console.log(personne); // => {nom: "Mallard", prenom: "Perrine", age: 18}
console.log(personne.age); // => 18
console.log(personne.age, personne.nom); // => 18 Mallard
