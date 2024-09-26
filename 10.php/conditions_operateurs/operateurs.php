<?php 

# '=' (simple égal)
$fruit = 'Pomme'; 

// # '==' (double égal)
// $test = '123';
// $test2 = 123; 
// // echo $test == $test2; // true
// // le double égal ne vérifie que la valeur 

// # '===' (triple égal)
// $test = '123';
// $test2 = 123; 
// echo $test === $test2; // false
// // triple égal permet de vérifier la valeur et le type

// if ($test === $test2) {
//     echo 'Même valeur et type';
// } else {
//     echo 'test echoué!';
// };

# '!=' (! + =) | '<>' (< + >)
// $test = 56;
// $test2 = 123; 
// echo $test === $test2; 

// if ($test != $test2) {
//     echo 'Valeurs différentes';
// } else {
//     echo 'Mêmes valeurs!';
// };


# '!' (négation) équivaut à l'inverse de ...
// $test = '123';
// $test2 = 123; 
// echo $test === $test2; 

// if (!($test === $test2)) {
//     echo 'Test échoué!';
// } else {
//     echo 'Même valeur et type';
// };

# '>' (strictement supérieur) | '<' (strictement inférieur)
// $nombre1 = 10;
// $nombre2 = 100; 

// if ($nombre1 > $nombre2) {
//     echo 'le nombre 1 est strictement supérieur au nombre 2';
// } else if ($nombre1 < $nombre2) {
//     echo 'le nombre 1 est strictement inférieur au nombre 2';
// } else {
//     echo 'le nombre 1 est égal au nombre 2';
// };

# '>=' (supérieur ou égal) | '<=' (inférieur ou égal)
// $nombre1 = 10;
// $nombre2 = 100; 

// if ($nombre1 >= $nombre2) {
//     echo 'le nombre 1 est supérieur ou égal au nombre 2';
// } else if ($nombre1 <= $nombre2) {
//     echo 'le nombre 1 est inférieur ou égal au nombre 2';
// };

# 'AND' ou '&&' | 'OR' ou '||' (ou) | 'XOR'
// $nombre1 = 67;
// $nombre2 = 77; 
// $nombre3 = 45; 
// $nombre4 = 100; 

// if ($nombre1 > $nombre2 && $nombre2 > $nombre3 || $nombre4 === 10) {
//     echo "$nombre1 et $nombre2 et $nombre3 sont dans l'ordre décroissant";
// } else {
//     echo "$nombre1 et $nombre2 et $nombre3 ne sont pas dans l'ordre décroissant";
// };

# 
$nombre1 = 67;
$nombre2 = 77;
$nombre3 = 45;
$nombre4 = 10; // jocker
$test = $nombre1 > $nombre2 && $nombre2 > $nombre3 || $nombre4 === 10;
$texte = "$nombre1 et $nombre2 et $nombre3";
$texte2 = "dans l'ordre décroissant";
echo $texte . (!$test ?  " ne sont pas " : " sont ") . $texte2;
// echo $test ? "$nombre1 et $nombre2 et $nombre3 sont dans l'ordre décroissant" : "$nombre1 et $nombre2 et $nombre3 ne sont pas dans l'ordre décroissant";