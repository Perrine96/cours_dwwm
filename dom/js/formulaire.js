let user = {
    nom: 'dupont',
    prenom: 'perrine'
};
console.log(user);

const monFormulaire = document.querySelector('#mon-formulaire');
// console.log(monFormulaire);

monFormulaire.addEventListener('submit', (event) => {
    // stoppe la propagation des évènements:
    event.preventDefault();
    const nom = monFormulaire.elements.nom.value;
    const prenom = monFormulaire.elements.prenom.value;

    const newUser = { nom, prenom };

    user = { ...user, ...newUser };

    console.log(user);  
    monFormulaire.reset();
});