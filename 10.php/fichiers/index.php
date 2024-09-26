<?php

$personne = (object)["prenom" => "tata", "nom" => "toto", "age" => 16];
$personne2 = (object)["prenom" => "tata", "nom" => "titi", "age" => 21];
$tab = [$personne, $personne2];
$fileName = __DIR__  . "//" . "sauv.csv"; 

$header = ["prenom", "nom", "age"];
function arrayToCsv($fileName, $donnees, $delimiter, $header)
{
$file = fopen($fileName, 'w');
fputcsv($file, $header, $delimiter);
foreach($donnees as $row) {
    $row = (array) $row;
    fputcsv($file, $row, $delimiter);
    }
fclose($file);
}
arrayToCsv($fileName, $tab, ",", $header);