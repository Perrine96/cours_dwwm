let tabUsers = [ 
    {
        nom: 'john',
        age: 15
    }, 
    {
        nom: 'Marc', 
        age: 20
    }
];

const rechercherUtilisateurParNom = (nomRecherche) => {
    let trouver = false; 
    for (const user of tabUsers) {
        if (nomRecherche === user.nom) {
            trouver = true;
        }
    }
    // boolean 
    console.log(`${nomRecherche}${trouver ? " existe !" : " n'existe pas !"}`)
};

rechercherUtilisateurParNom('Laura');
rechercherUtilisateurParNom('Marc');