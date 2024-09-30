<?php 
require ROOT_PATH . 'model/voiture.php';


class VoitureController {
    private object $voiture;

    public function __construct() {
        $this->voiture = new Voiture;
    }

        public function setPuissance($nouvellePuissance) {
            $this->voiture->setPuissance($nouvellePuissance);
        }
}