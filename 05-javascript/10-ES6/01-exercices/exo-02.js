// Exercice 2 
// Créer un tableau d'utilisateur vide
// Y stocker 2 ou plus d'utilisateurs qui possèdent un 'nom' et un 'service' (ex: "informatique")
// Créer une fonction qui permet de changer le service d'un utilisateur en y passant un nom, le nouveau service
// et le tableau d'origine
// cette fonction retourne un nouveau tableau à jour
// mettre à jour le tableau de base et l'afficher pour vérifier le changement 
// destructuration et spread operator
// afficher directement un console.log du tableau d'origine modifié


// Création tableau vide 
let tabUsers = []; 

// création objets 
const user1 = {
    nom: 'Laura',
    service: 'couverture',
}; 
const user2 = {
    nom: 'Emile',
    service: 'cuisine',
}; 

// stocker les objets dans le tableau 
tabUsers = [...tabUsers, user1, user2];
console.log(tabUsers);

// Création fonction 
function switchService(nomRecherche, newService, ...args) {
    let newtabUsers = [];
    for (const user of args) {
        const { nom, service } = user;
        if (nomRecherche === nom) {
            newtabUsers = [...newtabUsers, {user, service: newService}];
            console.log(newtabUsers)
        }
    }
};

switchService('Laura', 'informatique', ...tabUsers);