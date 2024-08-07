let personne = {
    nom: 'Mallard', 
    prenom: 'Perrine', 
    age : 18,
    parler: function() {
        console.log(`Bonjour, je m'appelle ${this.prenom}`);
    }
};

console.log(personne.prenom);
personne.prenom = 'Laura';
console.log(personne.prenom);
personne.prenom = [];
console.log(personne.prenom);
personne.taille = '180cm'; // à éviter, il faut partir du principe qu'on ne change pas la structure d'origine d'un objet !
console.log(personne);