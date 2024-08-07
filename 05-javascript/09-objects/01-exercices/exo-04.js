// Exercice 4
// Créez un objet "compte" avec les propriétés "nom", "solde" et "historique".
// Ajoutez des méthodes "deposer" et "retirer" à cet objet pour effectuer des opérations sur le solde.
// Ajoutez une méthode "afficherHistorique" qui affiche toutes les opérations dans l'historique. 

let compte = {
    nom: 'Mallard',
    solde: 1000, 
    historique: [],
    // méthodes 
    deposer: function(depot) {
        this.solde = this.solde + depot, 
        console.log(`Dépôt: ${depot} euros`)
    },
    retirer: function(retrait) {
        this.solde = this.solde - retrait, 
        console.log(`Retrait: ${retrait} euros`)
    },
    afficherHistorique: function() {
        console.log(compte.historique)
        console.log(`Nouveau solde: ${compte.solde} euros`)
    }
}


compte.deposer(200);
compte.retirer(500);
compte.afficherHistorique();