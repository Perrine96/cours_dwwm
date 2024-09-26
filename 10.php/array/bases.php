<?php

# array 
// $prenom = "Nicolas, Marie, Grégoire, Sylvain, Céline";
// echo $prenom; 

$listePrenoms = array('Nicolas', 'Marie', 'Grégoire', 'Sylvain', 'Céline');
$listePrenoms2 = ['Nicolas', 'Marie', 'Grégoire', 'Sylvain', 'Céline'];

array_push($listePrenoms2, 'Laura', 'Emile', 'Geoffrey');
$listePrenoms2[] = "Manu";

// echo $listePrenoms[2];
// print_r($listePrenoms2);
// var_dump($listePrenoms); // ajoute les longueurs et types des itérations 


# exercice
for ($i=0; $i < count($listePrenoms2); $i++) {
    echo "$listePrenoms2[$i]\n";
    // print_r("$listePrenoms2[$i]\n");
};

# façon Emile 
// $listePrenoms2 = [
//     "Nicolas",
//     "Marie",
//     "Grégoire",
//     "Sylvain",
//     "Céline"
// ];
// array_push($listePrenoms2, 3.1416, "Albert"); // ajouter des objets

// foreach ($listePrenoms2 as $cle => $val) {
//     $isPoint = count($listePrenoms2) - 1 === $cle;
//     if (!is_numeric($val) && strlen(($listePrenoms2) > 4)) {
//         print_r("$val" . (!$isPoint ? ',' : '.'));
//     }
// }