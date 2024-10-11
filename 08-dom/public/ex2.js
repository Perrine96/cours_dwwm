// 1. Ajouter un événement 'click' à un bouton HTML en utilisant JavaScript
// 2. Lorsque l'utilisateur clique sur le bouton, un message doit s'afficher dans une boite de dialogue

const MyButton = document.querySelector('#mon-bouton');
console.log(MyButton);

MyButton.addEventListener('click', () => {
    window.alert('bouton cliqué');
});