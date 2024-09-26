<?php




$fileName = __DIR__  . "//" . "sauv.txt"; 
echo $fileName; 

$file = fopen($fileName, "w");

fwrite($file, "Bonjour");

fclose($file);