// FOR
//-------

let couleurs = ["rouge", "vert", "bleu", "jaune"];

// initialiser une variable i dans la paranthèse, souvent i = 0
// Puis lui mettre une limite (souvent la longueur du tableau)
// Puis incrémenter, ici i prend 1 à chaque itération
for (let i = 0; i < couleurs.length; i++) {
    console.log(i);
    console.log(couleurs[i]);
}

for (let i = couleurs.length - 1; i >= 0; i--) {
    console.log(couleurs[i]);
}