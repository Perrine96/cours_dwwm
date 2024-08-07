// Exercice 3
// Créez un objet "voiture" avec les propriétés "marque", "modèle" et "année".
// Ajoutez une méthode "afficher" à cet objet qui affiche toutes les propriétés de l'objet dans la console

let voiture = {
    marque: 'Renault',
    modele: 'Twingo', 
    annee: 2015,
    // méthode
    afficher: function() {
        console.log(voiture.marque, voiture.modele, voiture.annee);
    }
}; 

voiture.afficher();