// 1. Créer une liste HTML à l'aide de JavaScript
// 2. Ajouter des éléments à la liste en utilisant JavaScript lorsque l'utilisateur soumet un formulaire


// récupération du formulaire
const monFormulaire = document.querySelector('#formulaire-liste');
// création d'une liste
const liste = document.createElement('ul');
// ajout de la liste dans le body
document.body.appendChild(liste);

let index = 1;

monFormulaire.addEventListener('submit', (event) => {
    // stoppe la propagation des évènements
    event.preventDefault();
    const newWord = document.getElementById('word').value.trim();
    if (newWord !== '') {
        const li = document.createElement('li');
        li.textContent = `${index} ${newWord}`;
        liste.appendChild(li);
        // reset du formulaire
        monFormulaire.reset();
        index++;
        // console.log(newWord);
        // const words = document.querySelectorAll('li');
        // console.log(words);
        // words.forEach((word, index) => {
        //     console.log(word);
        //     console.log(index);
        //     word.textContent = 'test';
    }
});

