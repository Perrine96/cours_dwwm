let personne = {
    nom: 'Mallard', 
    prenom: 'Perrine', 
    age: 18,
    // méthode
    parler: function() {
        console.log(`Bonjour, je m'appelle ${this.prenom}`);
    }
};

personne.parler();
