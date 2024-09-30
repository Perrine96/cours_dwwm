<?php


// 
// fonction qui créer ou modifie une sauvegarde en fichier '.csv' à partir d'un tableau d'objet
// 
function arrayToCsv($fileName, &$donnees, $delimiter = ',', $header = array())
{
$file = fopen($fileName, 'w');
fputcsv($file, $header, $delimiter);
foreach($donnees as $row) {
    $row = (array) $row;
    fputcsv($file, $row, $delimiter);
    }
fclose($file);
}

// 
// fonction qui récupère un fichier '.csv'
// pour remplir un tableau d'objet
// 
function csvToArray(&$donnees, $fileName, $delimiter = ',') {
    if (!file_exists($fileName) || !is_readable($fileName)) return FALSE;

    $header = NULL;
    if (($handle = fopen($fileName, 'r')) !== FALSE) {
        while (($row =  fgetcsv($handle, 1000, $delimiter)) !== FALSE) {
            if (!$header) {
                $header = $row;
            } else {
                $donnees[] = array_combine($header, $row);
            }
        }
    }
    fclose($handle);
}