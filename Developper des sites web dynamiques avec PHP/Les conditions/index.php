<?php

$type = 'voiture'; // À changer à chaque réparation

// Affectation du nombre de pneus à la variable $nbPneus

//En fonction du véhicule, je donne une valeur à la variable $nbPneus
switch($type)
{
    case 'voiture':
    case 'quad':
        $nbPneus = 4;
        break;
    case 'trike':
        $nbPneus=3;
        break;
    case 'scooter':
    case 'moto':
        $nbPneus = 2;
        break;
    default:
        $nbPneus = 1;
}

// Calcul des deux prix $pneufPrice et $rouesCoolPrice
$pneufPrice =$nbPneus * 60;
$rouesCoolPrice =$nbPneus * 75;

if($nbPneus >= 4){
    //Diminuer le prix de pneufPrice de 15%
    $pneufPrice = $pneufPrice * 0.85;
}

if($nbPneus >= 3) {
    //Diminuer le prix de rouesCoolPrice de 25%
    $rouesCoolPrice = $rouesCoolPrice * 0.75;
}

// Affichage du nom du fournisseur le plus intéressant
if($pneufPrice > $rouesCoolPrice){
    echo 'Roues Cool est plus intéressant';
}
else if($pneufPrice < $rouesCoolPrice){
    echo 'Pneuf est plus intéressant';
}
else{
    echo 'Les deux prix sont les mêmes';
}