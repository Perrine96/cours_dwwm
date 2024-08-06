// sans modifications
const direBonjour = (prenom, nom) => {
    console.log(`Bonjour ${prenom} ${nom}`);
}

direBonjour("Perrine", "Mallard");

// S'il n'y a qu'une seule instruction, on peut supprimer les accolades
const direBonjour1 = (prenom, nom) => 
    console.log(`Bonjour ${prenom} ${nom}`);

direBonjour1("Perrine", "Mallard");


// S'il n'y a qu'un seul argument, on peut supprimer les parenthèses
const direBonjour2 = prenom => 
    console.log(`Bonjour ${prenom}`);

direBonjour2("Perrine");


// Valable aussi pour les if 
if (true) console.log("vrai");