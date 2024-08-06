let couleur = "vert";

// if (couleur = "vert") {
//     console.log("Vous pouvez souscrire à une assurance chez nous");
// } else if (couleur = "rouge") { 
//     console.log("Vous ne pouvez pas souscrire à une assurance chez nous");
// } else {
//     console.log("Besoin d'informations supplémentaires'");
// }

switch (couleur) {
    case "vert":
        console.log("Vous pouvez souscrire à une assurance chez nous");
        break;
    case "rouge":
        console.log("Vous ne pouvez pas souscrire à une assurance chez nous");
        break;
    default:
        console.log("Besoin d'informations supplémentaires");
        break;
}