const button = document.querySelector('#mon-bouton');
console.log(button);

button .addEventListener('mouseenter', () => {
    let paragraphe = document.querySelector('#mon-paragraphe');
    paragraphe.classList.add('change-color');
    // window.alert('bouton cliqué');
})
button .addEventListener('mouseleave', () => {
    let paragraphe = document.querySelector('#mon-paragraphe');
    paragraphe.classList.remove('change-color');
})



// PARAGRAPHE
// let paragraphe = document.querySelector('#mon-paragraphe');
// console.log(paragraphe); 
// paragraphe.style.color = "red";

// Attention avec innerHTML, niveau sécurité: on peut y injecter ce qu'on veut
// paragraphe.innerHTML = "Mon nouveau contenu";
// Préférer le textContent si on ne veut rajouter que du texte
// paragraphe.textContent = "Mon nouveau contenu bis";