// objet
// pas de const si spread operator utilisé
let user = {
    nom: 'test', 
    prenom: 'toto',
    age: 56,
    taille: 'petit',
};

// sans spread
user.ville = 'Arras'; 
// spread
user = {...user, ville: 'Arras'};

console.log(user);


const { age, taille, ...rest } = user; // rest => { nom: 'test', prenom: 'toto' }
console.log(age, taille, rest);