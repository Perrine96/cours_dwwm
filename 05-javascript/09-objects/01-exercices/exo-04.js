// Exercice 4
// Créez un objet "compte" avec les propriétés "nom", "solde" et "historique".
// Ajoutez des méthodes "deposer" et "retirer" à cet objet pour effectuer des opérations sur le solde.
// Ajoutez une méthode "afficherHistorique" qui affiche toutes les opérations dans l'historique. 

let compte = {
    nom: 'Mallard',
    solde: 1000, 
    // historique: 1000,
    // méthodes 
    deposer: function(depot) {
        console.log(`Dépôt: ${depot} euros`)
    },
    retirer: function(retrait) {
        console.log(`Retrait: ${retrait} euros`)
    },
    afficherHistorique: function(solde, depot, retrait) {
        solde = solde + depot - retrait,
        console.log(`Nouveau solde: ${solde} euros`)
    }
}


compte.deposer(100);
compte.retirer(500);
compte.afficherHistorique() 
// Retait: 100 euros
// Dépôt: 500euros
// Nouveau solde: 600 euros