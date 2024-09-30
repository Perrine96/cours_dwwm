<?php

require ROOT_PATH .  './model/concession.php';

class ConcessionController {
    private object $concession;

    public function __construct() {
        $this->concession = new Concession();
    }

    public function enregistrerVoiture($nouvelleVoiture) {
        $tab = $this->concession->getTabVoitures();
        $tab[] = $nouvelleVoiture;
        $this->concession->setTabVoitures($tab);
    }

    public function showAllCar() {
        return $this->concession->getTabVoitures();
    }
}