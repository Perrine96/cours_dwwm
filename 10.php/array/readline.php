<?php

// $prenom = readline("Veuillez saisir un prénom : "); // stop le process
// echo gettype($prenom);

// $nombre = intval(readline("Veuillez saisir un nombre : ")); // stop le process
// if (is_numeric($nombre)) echo 'ok ';
// echo gettype($nombre);

$myTab = [];
$newWord = strtolower(readline("Veuillez saisir un mot ou écrire 'exit' pour quitter : "));
while ($newWord != 'exit') {
    $myTab[] = "$newWord\n";
    $newWord = strtolower(readline("Veuillez saisir un mot ou écrire 'exit' pour quitter : "));
};
print_r($myTab);


// version Geoffrey 
// while (true) {
//     $prenom = readline("Veuillez saisir un prénom : ");
//     $nom = readline("Veuillez saisir un nom : ");
//     $age = readline("Veuillez saisir un âge : ");
//     $newPerson = (object) ['prenom' => $prenom, 'nom' => $nom, 'age' => $age];
//     $mytab[] = $newPerson;

//     $continue = readline("Voulez-vous ajouter une autre personne ? (oui/non) : ");
//     if (strtolower($continue) !== 'oui') {
//         break;
//     }
// }

// print_r($mytab);

// version Fred 
// <?php

// class Remplissage
// {
//     public $valeur;
//     public $mytab = [];

//     public function __construct()
//     {
//         $this->valeur = readline("Veuillez saisir un chiffre ou un prénom: ");
//     }

//     public function destroyer()
//     {
//         $regex = '/^[OoNn]+$/i';
//         while (true) {
//             if (ctype_alpha($this->valeur)) {
//                 while (true) {
//                     $result = readline("Voulez-vous ajouter ce prénom au tableau? O/N ");
//                     if (preg_match($regex, $result)) {
//                         if (strtoupper($result) === 'O') {
//                             $this->mytab[] = $this->valeur;
//                             echo "\nPrénom ajouté : $this->valeur\n";
//                         } else {
//                             echo "\nVous avez entré : $this->valeur\n";
//                         }
//                         break;
//                     } else {
//                         echo "\nEntrée invalide. Veuillez saisir 'O' ou 'N'.\n";
//                     }
//                 }
//             } elseif (ctype_digit($this->valeur)) {
//                 while (true) {
//                     $result = readline("Voulez-vous ajouter ce chiffre au tableau? O/N ");
//                     if (preg_match($regex, $result)) {
//                         if (strtoupper($result) === 'O') {
//                             $this->mytab[] = $this->valeur;
//                             echo "\nÉlément ajouté\n";
//                         } else {
//                             echo "\nVous avez bien entré un nombre mais vous avez décidé de l'ignorer, étrange...\n";
//                         }
//                         break;
//                     } else {
//                         echo "\nEntrée invalide. Veuillez saisir 'O' ou 'N'.\n";
//                     }
//                 }
//             } else {
//                 echo "\nLa saisie est incongrue. Veuillez entrer un prénom ou un chiffre.\n";
//             }

//             while (true) {
//                 $lastanswer = readline("Voulez-vous continuer ? O/N : ");
//                 if (preg_match($regex, $lastanswer)) {
//                     if (strtoupper($lastanswer) === 'N') {
//                         echo "\n**********************************************************";
//                         echo "\nFin de ce programme impromptu.\n";
//                         echo "***********************************************************\n";
//                         break 2;
//                     } else {
//                         while (true) {
//                             $finalAns = readline("Voulez-vous afficher le tableau? O/N : ");
//                             if (preg_match($regex, $finalAns)) {
//                                 if (strtoupper($finalAns) === 'O') {
//                                     print_r($this->mytab);
//                                 }
//                                 break;
//                             } else {
//                                 echo "Entrée invalide. Veuillez saisir 'O' ou 'N'.\n";
//                             }
//                         }
//                     }
//                     break;
//                 } else {
//                     echo "Entrée invalide. Veuillez saisir 'O' ou 'N'.\n";
//                 }
//             }
//             $this->valeur = readline("Veuillez saisir un chiffre ou un prénom: ");
//         }
//     }
// }

// $remplissage = new Remplissage();
// $remplissage->destroyer();