let couleurs = ["rouge", "vert", "bleu", "blanc"];

for (let i = 0; i < couleurs.length; i++) {
    switch (couleurs[i]) {
        case "rouge":
            console.log("danger");
            break;
        case "vert":
            console.log("sécurité");
            break;
        case "bleu":
            console.log("ciel");
            break;
        case "blanc":
            console.log("paradis");
            break;
        default :
            console.log("couleur non reconnue");
    }
}