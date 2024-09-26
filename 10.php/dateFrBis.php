<?php

$formatter = new IntlDateFormatter('fr_FR', IntlDateFormatter::LONG, IntlDateFormatter::NONE);
$dateFr = $formatter->format(time());
echo $dateFr;