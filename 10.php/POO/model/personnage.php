<?php

class Personnage {
    // propriétés | attribut
    // doc src : 'https://docs.phpdoc.org/guide/references/phpdoc/'
    /**
     * Nom du personnage
     *
     * @var string $nom nom du personnage
     * 
     */
    private string $nom;
    private int $pointsDeVie;
    private int $force;

    public function __construct($nom, $pointsDeVie, $force = 50)
    {
        $this->nom = $nom;
        $this->pointsDeVie = $pointsDeVie;
        $this->force = $force;
    }

    public function Attaquer($personnage) {
        $personnage->pointsDeVie -= 10;
    }

    public function __toString(){
        $txt = '';
        $txt .= "Nom: $this->nom\n";
        $txt .= "Points de vie: $this->pointsDeVie\n";
        $txt .= "Force: $this->force\n";
        return $txt;
    }

    // setter
    public function setNom($nouveauNom) {
        $this->nom = $nouveauNom;
    }

    // getter
    public function getNom() {
        return $this->nom;
    }

    // Nouveau points de vie
    public function setPointsDeVie($nouveauPointsDeVie) {
        $this->pointsDeVie = $nouveauPointsDeVie;
    }

    public function getPointsDeVie() {
        return $this->pointsDeVie;
    }
}

$personnage1 = new Personnage("Laura", 25, 80); // instanciation 
$personnage2 = new Personnage("Emile", 50, 75);
$personnage3 = new Personnage ("Geoffrey", 68);


// echo $personnage2;
// echo $personnage2->setNom('Perrine');
// echo $personnage2;
// echo $personnage2;
// echo $personnage2->parler();
// echo $personnage1->pointsDeVie . PHP_EOL;
// $personnage1->Attaquer($personnage2);
// echo $personnage1->pointsDeVie;
// echo $personnage2->parler();
// echo $personnage2;

// manipulation
$personnage2->setPointsDeVie(60);
echo $personnage2;
// $personnage3->taille = 180; // on ne peut plus ajouter des attributs à la volée
// var_dump($personnage1);
// var_dump($personnage2);
// var_dump($personnage3);

// $personnage;