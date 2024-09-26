<?php
// Date en français
$jour = getdate();
print_r(getdate());
$semaine = array(
    " Dimanche ",
    " Lundi ",
    " Mardi ",
    " Mercredi ",
    " Jeudi ",
    " vendredi ",
    " samedi "
);
$mois = array(
    1 => " janvier ",
    " février ",
    " mars ",
    " avril ",
    " mai ",
    " juin ",
    " juillet ",
    " août ",
    " septembre ",
    " octobre ",
    " novembre ",
    " décembre "
);
print_r($mois);
// Avec getdate()
echo "Français : Avec getdate() : Aujourd'hui ", $semaine[$jour['wday']], $jour['mday'], $mois[$jour['mon']], $jour['year'], "
";
// Avec date()
echo "Français : Avec date() : Aujourd'hui ",
$semaine[date('w')], " ", date('j'), "", $mois[date('n')], date('Y'), "
";