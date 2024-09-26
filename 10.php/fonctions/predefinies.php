<?php

// echo date('d/m/y'); // 25/09/24
// echo date('D-M-Y'); // Wed-Sep-2024

#strlen()
// $phrase = ' Mettez la phrase que vous voulez ';
// echo strlen($phrase); //37

# substr()
// $paragraphe = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus numquam quaerat laborum, soluta, nulla cupiditate in minima dolorum corrupti ab amet a non modi perferendis odio suscipit provident quasi porro!";
// $excerpt = substr($paragraphe, 0, 20) . '...<a href="#">Lire la suite.</a>';
// echo $excerpt;

# isset()
// $pseudo = 'toto'; 

// // if ($pseudo) { // erreur si $pseudo n'existe pas
// if (isset($pseudo)) {
//     echo 'la variante $pseudo existe';
// } else {
//     echo 'la variable $pseudo n\'existe pas';
// }

# empty()
$pseudo = '    '; // => '' si trim() 

// if ($pseudo) { // erreur si $pseudo n'existe pas
if (empty(trim($pseudo))) {
    echo 'la variante $pseudo est vide';
} else {
    echo 'la variable $pseudo n\'est pas vide';
}