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









// // Création tableau vide 
// let tabUsers = []; // tableau vide

// // création objets 
// const user1 = {
//     nom: 'Laura',
//     service: 'couverture'
// };

// const user2 = {
//     nom: 'Emile',
//     service: 'cuisine',
//     age: 25,
//     sexe: 'femme',
//     taille: 'petit'
// }; 

// // stocker les objets dans le tableau 
// tabUsers = [user1, user2];
// console.log(tabUsers); // => [ { nom: 'Laura', service: 'couverture' }, { nom: 'Emile', service: 'cuisine' } ]

// const switchService = (nomUser, newService, tabUsers) => {
//     // Initialisation d'un nouveau tableau
//     let newtabUsers = [];
//     // On boucle sur le tableau d'utilisateurs contenant actuellement Laura et Emile
//     for (const user of tabUsers) {
//         const { nom } = user; // destructuration de l'objet user, on recupère la valeur de la clé nom
//         if (nomUser === nom) {
//             // On effectue le changement de service en utilisant le spread operator
//             user = { ...user, service: newService };
//             console.log(user); // => { nom: 'Laura', service: 'informatique' }
//             newtabUsers.push(user);
//         } else {
//             newtabUsers.push(user);
//         }
//     }

//     // On retourne le nouveau tableau
//     return newtabUsers;
// };

// // Appel de la fonction
// newArray = switchService('Laura', 'informatique', tabUsers);
// console.log(newArray); // => [ { nom: 'Laura', service: 'informatique' }, { nom: 'Emile', service: 'cuisine' } ]