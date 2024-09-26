<?php

class Temporis {
    public $saison;
    public $temp;

    public function __construct($saison, $temp) {
        $this->saison = $saison;
        $this->temp = $temp;
    }

    public function __toString(){
        $intervalleJuste = $this->temp > 1 || $this->temp < -1;
        $quinteJuste = $this->temp == 1 || $this->temp == -1 || $this->temp == 0;
        return $quinteJuste ? "il fait $this->temp degré et nous sommes en $this->saison" : "il fait $this->temp degrés et nous sommes en $this->saison";
    }

    public function contrib_temp() {
        if ($this->temp < 6) {
            $this->saison = "hiver";
            return "un vent de fraicheur déclasse la saison\nNous sommes en $this->saison et il fait $this->temp degrés\n";
        } else if ($this->temp >= 6 && $this->temp < 12) {
            $this->saison = "automne";
            return "un souffle automnal s'expose\nNous sommes en $this->saison et il fait $this->temp degrés\n";           
        }   else if ($this->temp >=12 && $this->temp <= 20){
            return "une obstruction printanière effleure l'abscons\nNous sommes en $this->saison et il fait $this->temp degrés\n";
        } 
        else {
            return $this->saison . " et " . $this->temp . " degrés";
        }
    }
}

$tempInstance = new Temporis("hiver", -2);
echo $tempInstance->contrib_temp();
echo $tempInstance;