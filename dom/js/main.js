const newButton = document.createElement('button');
const newButton2 = document.createElement('button');
const maDiv = document.querySelector('#ma-div');
newButton.textContent = 'Valider';
newButton2.textContent = 'Valider';
newButton.setAttribute('id', 'mon-bouton');
newButton2.setAttribute('id', 'mon-bouton2');

document.body.append(newButton);
maDiv.prepend(newButton2);