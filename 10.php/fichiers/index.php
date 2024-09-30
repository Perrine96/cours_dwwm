<?php

require ('lib/functions.php');
require('lib/utils.php');
$tab = [];
$fileName = __DIR__ . "\\" . "sauv.csv";
csvToArray($tab, $fileName);
print_r($tab);

$personne = (object)["prenom" => "mimi", "nom" => "toto", "age" => 21];
$personne2 = ["prenom" => "tata", "nom" => "titi", "age" => 34];
array_push($tab, $personne, $personne2);
$header = ["prenom", "nom", "age"];
arrayToCsv($fileName, $tab, ",", $header);
change_color("blue"); // change the color in the terminal
print_r($tab);
change_color(''); // restore the color in the terminal

change_color('purple'); 
echo (PHP_EOL . PHP_EOL .
    "-------------" . PHP_EOL .
    "1. Chercher une personne" . PHP_EOL .
    "2. Supprimer une personne" . PHP_EOL .
    "3. Quitter" . PHP_EOL);
change_color('');

while (true) {
    $saisie = readline('Veuillez choisir un menu ou 3 pour quitter ');
    switch ($saisie) {
        case 1: 
            require_once('personnes/lister_personnes.php');
            break;
        case 2: 
            require_once('personnes/supprimer_personnes.php');
            break;
        case 3: 
            exit;
            break;
    }
}