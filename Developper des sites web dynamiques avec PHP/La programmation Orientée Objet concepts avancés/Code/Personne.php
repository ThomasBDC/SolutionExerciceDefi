<?php
require_once 'DescriptiveElement.php';

abstract class Personne implements DescriptiveElement
{
    public string $Prenom;
    public string $NomDeFamille;

    public function __construct(string $prenom, string $nomDeFamille){
      $this->Prenom = $prenom;
      $this->NomDeFamille = $nomDeFamille;
    }

    public function GetFullName():string{
      return $this->Prenom.' '.$this->NomDeFamille;
    }
}

?>