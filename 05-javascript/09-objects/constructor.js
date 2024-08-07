// Dans bases on a directement construit l'objet (ce qui est plus pratique en javascript). Mais on peut aussi créer un constructeur.
// Mettre une majuscule au constructor !!
function Personne(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

// création d'une instance de Personne => objet
let personne1 = new Personne('Mallard', 'Perrine', 18); // construction de l'objet personne 
// on peut créer plusieurs instances de Personne
let personne2 = new Personne('Dupont', 'Emma', 23);

console.log('personne1 : ', personne1); // => personne1 Personne {nom: "Mallard", prenom: "Perrine", age: 18}
console.log('personne2 : ', personne2); // => personne2 Personne {nom: "Dupont", prenom: "Emma", age: 23}