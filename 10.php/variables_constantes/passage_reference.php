<?php

$fruit1 = 'pomme';
$fruit2 = 'banane';
// echo "Fruit1 : $fruit1\n";
// echo "Fruit2 : $fruit2";
$fruit2 = &$fruit1; // passage par référence
// echo "Fruit1 : $fruit1\n";
// echo "Fruit2 : $fruit2";
$fruit1 = 'fraise'; 
echo "Fruit1 : $fruit1\n";
echo "Fruit2 : $fruit2";