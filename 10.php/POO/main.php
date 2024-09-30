<?php

require 'lib/init.php';
require ROOT_PATH . 'controller/concessionController.php';
require ROOT_PATH . './controller/voitureController.php';

$concessionController = new ConcessionController(); 
$voiture1 = new VoitureController(); 
$voiture1->setPuissance(18);
// $concession->enregistrerVoiture($voiture1);

$voiture2 = new VoitureController();
$concessionController->enregistrerVoiture($voiture1);
$concessionController->enregistrerVoiture($voiture2);
// $concession->enregistrerVoiture($voiture2);
// print_r($concession->getTabVoitures()); 
// $concessionController->showAllCar();
print_r($concessionController->showAllCar());
