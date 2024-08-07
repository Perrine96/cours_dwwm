// Exercice 1 
// Créez un objet "personne" avec les propriétés "nom", "age" et "ville".
// Affectez des valeurs à ces propriétés. 
// Affichez ces valeurs à l'aide de console.log()


let personne = {
    nom: 'Mallard',
    age: 27,
    ville: 'Arras',
};

console.log(personne.nom);
console.log(personne.age);
console.log(personne.ville);


// Avec la méthode ça aurait donné :
let personne1 = {
    nom: 'Mallard',
    age: 27,
    ville: 'Arras',
    sePresenter: function() {
        console.log(`Bonjour, je m'appelle ${this.nom}, j'ai ${this.age} ans et j'habite à ${this.ville}`);
    }
};

personne1.sePresenter();