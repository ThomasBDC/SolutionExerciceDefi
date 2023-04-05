<?php

interface DescriptiveElement{
  //Récupérer le titre
  public function getTitle(): string;

  //Récupérer la description
  public function getDescription(): string;
}

?>