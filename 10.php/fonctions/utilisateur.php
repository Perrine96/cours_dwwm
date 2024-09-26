<?php

// function calculTva()
// {
//     return 100 * 1.2;
// }
// echo calculTva();


// function calculTva()
// {
//     return $prix * 1.2;
// }
// echo calculTva(100);


// define("TVAVINGTPOURCENT", 1.2);
// define("TVAVINGTCINQPOURCENT", 1.25);

// function calculTva($prix, $tauxTva)
// {
//     return $prix * $tauxTva;
//     return $prixCalcule;
// }
// echo calculTva(100, TVAVINGTPOURCENT);


// valeur par défaut
define("TVAVINGTPOURCENT", 1.2); // valeur par défaut 
define("TVAVINGTCINQPOURCENT", 1.25);

function calculTva($prix, $tauxTva = 1.2) // taux 1.2 par défaut si non renseigné à l'appel de la fonction (attention, on ne peut pas mettre des valeurs par défaut avant des valeurs obligatoires)
{
    return $prix * $tauxTva;
    return $prixCalcule;
}
echo calculTva(100);

