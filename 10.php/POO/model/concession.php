<?php

class Concession {
    private string $nom;
    private array $tabVoitures = [];

    public function __construct($nom = 'Chez Bernard') {
        $this->nom = $nom;
        $this->tabVoitures = [];
    }


    /**
     * Get the value of tabVoitures
     *
     * @return array
     */
    public function getTabVoitures(): array {
        return $this->tabVoitures;
    }

    /**
     * Set the value of tabVoitures
     *
     * @param array $tabVoitures
     *
     * @return self
     */
    public function setTabVoitures(array $tabVoitures): self {
        $this->tabVoitures = $tabVoitures;
        return $this;
    }

    /**
     * Get the value of nom
     *
     * @return string
     */
    public function getNom(): string {
        return $this->nom;
    }

    /**
     * Set the value of nom
     *
     * @param string $nom
     *
     * @return self
     */
    public function setNom(string $nom): self {
        $this->nom = $nom;
        return $this;
    }
}