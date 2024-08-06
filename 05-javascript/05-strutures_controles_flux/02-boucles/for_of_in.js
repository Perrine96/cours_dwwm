// FOR OF IN 
//------------

const couleurs = ["rouge", "vert", "orange"];

// pour faire des boucles plus rapidement si on a juste besoin de récupérer les valeurs d'un tableau
for (const couleur of couleurs) {
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
}

// index de la variable (moins utilisé)
for (const indexOfCouleur in couleurs) {
    console.log(indexOfCouleur);
}
