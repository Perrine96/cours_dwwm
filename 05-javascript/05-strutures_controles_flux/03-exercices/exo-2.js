// Exercice 2

// Utilisez une intruction "switch" pour vérifier la valeur d'une variable "couleur"
// affichez la signification correspondante (par exemple, "rouge" signifie "danger", etc.)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = function () {
  rl.question("Veuillez saisir une couleur ou quitter ['exit'] : ", function (couleur) {
    if (couleur === 'exit') {
      console.log('Merci et au revoir');
      return rl.close(); //closing RL and returning from function.
    }
    //we need some base case, for recursion
switch (couleur) {
    case "rouge":
        console.log("colère");
        break;
    case "vert":
        console.log("dégoût");
        break;
    case "bleu":
        console.log("tristesse");
        break;
    case "jaune":
        console.log("joie");
        break;
}
recursiveAsyncReadLine(); //Calling this function again to ask new question
});
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow