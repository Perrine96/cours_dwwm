// fetch API (on interroge une API et elle nous renvoie un objet)
const user = {
    name: 'test', 
    prenom: 'toto',
    age: 56,
    taille: 'petit',
};

// récupération des champs 
const name = 'tata'; 
const age = 23; 

// renvoyer l'objet modifié 

// ancienne méthode:
// const newUser = {
//     name: name, 
//     prenom: 'toto',
//     age: age,
//     taille: 'petit',
// };
// console.log(newUser);

// on ne répète pas ce qu'on n'a pas besoin
const newUser = {
    // objet d'origine destructuré
    ...user,
    // attributs modifiés
    // name: name, 
    // age: age,
    // si le nom de la variable et de l'attribut sont identiques (ça ne marche que dans ce cas-là): 
    name, 
    age,
};
console.log(newUser);