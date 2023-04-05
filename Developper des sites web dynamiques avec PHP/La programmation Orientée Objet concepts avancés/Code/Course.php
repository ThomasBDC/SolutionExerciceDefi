<?php
require_once 'DescriptiveElement.php';
class Course implements DescriptiveElement {
  public string $Titre;
  public string $Description;

  public function __construct(string $titre, string $description){
      $this->Titre = $titre;
      $this->Description = $description;
    }

  public function getTitle():string{
      return $this->Titre;
    }

    public function getDescription(): string{
      return $this->Description;
    }
}
?>