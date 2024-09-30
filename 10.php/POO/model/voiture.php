<?php


class Voiture {

    private int $vitesse;
    private int $puissance;

    public function __construct($vitesse = 50, $puissance = 7) {
        $this->vitesse = $vitesse;
        $this->puissance = $puissance;
    }

    // getter/setter vitesse
    public function getVitesse() {
        return $this->vitesse;
    }

    public function setVitesse($nouvelleVitesse) {
        $this->vitesse = $nouvelleVitesse;
    }

    /**
     * Get the value of puissance
     *
     * @return int
     */
    public function getPuissance(): int {
        return $this->puissance;
    }

    /**
     * Set the value of puissance
     *
     * @param int $puissance
     *
     * @return self
     */
    public function setPuissance(int $puissance): self {
        $this->puissance = $puissance;
        return $this;
    }
}

// $voiture1 = new Voiture(60, 10);
// // echo $voiture1; // Error: Object of class Voiture could not be converted to string
// echo $voiture1->getPuissance() . " CV" . PHP_EOL;
// $voiture1->setPuissance(7); 
// echo "Nouvelle puissance : " . $voiture1->getPuissance() . " CV" . PHP_EOL;
// echo $voiture1->getVitesse() . " km/h.";