<?php

abstract class Logement{
    private string $adresse;
    private float $surface;
    private float $prix;
    private ?Annexe $annexe;

    public function __construct(string $adresse, float $surface, float $prix, ?Annexe $annexe = null)
    {
        $this->adresse = $adresse;
        $this->surface = $surface;
        $this->prix = $prix;
        $this->setAnnexe($annexe);
    }

    public function getAdresse(): string
    {
        return $this->adresse;
    }
    public function getSurface(): float
    {
        if($this->annexe !== null){
            return $this->surface + $this->annexe->getAdditionalSurface();
        }
        return $this->surface;
    }
    public function getPrix(): float
    {
        return $this->prix;
    }
    public function setPrix(float $price): void
    {
        $this->prix = $price;
    }

    public function getAnnexe(): ?Annexe{
        return $this->annexe;
    }

    
    public function setAnnexe(?Annexe $annexe):void{
        $this->annexe = $annexe;
    }
}

final class Appartement extends Logement
{
    private int $nbEtage;

    public function __construct(string $adresse, float $surface, float $prix, int $nbEtage)
    {
        parent::__construct($adresse, $surface, $prix);
        $this->nbEtage = $nbEtage;
    }

    public function getNbEtage(): int{
        return $this->nbEtage;
    }
    public function setNbEtage($nbEtage):void{
        $this->nbEtage = $nbEtage;
    }
}

final class Maison extends Logement
{
    private int $nbNiveau;

    public function __construct(string $adresse, float $surface, float $prix, int $nbNiveau)
    {
        parent::__construct($adresse, $surface, $prix);
        
        $this->nbNiveau = $this->getCheckedNbNiveau($nbNiveau);
    }

    public function getNbNiveau(): int{
        return $this->nbNiveau;
    }
    public function setNbNiveau($nbNiveau):void{
        $this->nbNiveau = $this->getCheckedNbNiveau($nbNiveau);
    }

    private function getCheckedNbNiveau($nbNiveau): int{
        if($nbNiveau < 1 ){
            return 1;
        }
        else{
            return $nbNiveau;
        }
    }
}

interface AnnexeInterface{
    public function getAdditionalSurface():float;
}

abstract class Annexe implements AnnexeInterface{
    private float $surface;

    public function __construct(float $surface)
    {
        $this->setSurface($surface);
    }

    public function getSurface():float{
        return $this->surface;
    }

    private function setSurface($surface){
        $this->surface = $surface;
    }
}

final class Jardin extends Annexe{
    private bool $hasPiscine;
    
    public function __construct(float $surface, bool $hasPiscine)
    {
        parent::__construct($surface);
        $this->setHasPiscine($hasPiscine);
    }

    public function getHasPiscine():bool{
        return $this->hasPiscine;
    }

    public function setHasPiscine(bool $hasPiscine){
        $this->hasPiscine = $hasPiscine;
    }

    public function getAdditionalSurface():float {
        return $this->getSurface();
    }
}

final class Parking extends Annexe{
    private string $numPlace;
    
    public function __construct(float $surface, string $numPlace)
    {
        parent::__construct($surface);
        $this->setNumPlace($numPlace);
    }

    public function getNumPlace():string{
        return $this->numPlace;
    }

    public function setNumPlace(string $numPlace){
        $this->numPlace = $numPlace;
    }
    
    public function getAdditionalSurface():float {
        return 0;
    }
}

$garden = new Jardin(20, true);
$parking = new Parking(6, 2);
$house = new Maison('102 rue des noyers', 120, 350000.00 , 2);
echo "coucou <br/>";
echo $house->getSurface().'<br>'; 
echo "Affiche 120, car il n'y a pas d'annexe <br/><br/>";
$house->setAnnexe($garden);
echo $house->getSurface().'<br>'; 
echo "Affiche 140 car le jardin est compris dans l'annexe <br/><br/>";
$flat = new Appartement('45 rue de la république', 30, 150000, 3, $parking);
echo $flat->getSurface().'<br>'; 
echo "Affiche 30 car le parking n'est pas compris dans le calcul";
?> 