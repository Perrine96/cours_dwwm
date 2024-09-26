<?php 

$bonjour = 'Bonjour';
$tout = 'tout';
$leMonde = 'le monde';
$bonjour .= " $tout"; 
$bonjour .= " $leMonde\n"; // ça équivaut à écrire : $bonjour = $bonjour . leMonde

// echo $bonjour . ' ' . $leMonde . PHP_EOL;
// echo "$bonjour $leMonde\n"; // Bonjour le monde
echo "$bonjour";

// $jour = 'aujourd'hui'; // erreur
$jour = 'aujourd\'hui'; // échappement
$jour = "aujourd'hui"; // ok