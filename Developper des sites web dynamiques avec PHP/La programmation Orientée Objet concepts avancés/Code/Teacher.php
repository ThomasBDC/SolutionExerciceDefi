<?php
require_once 'Personne.php';
require_once 'Course.php';

class Teacher extends Personne
{
   public Course $CoursEnseigne;

    public function __construct(string $prenom, string $nomDeFamille,Course $course)
    {
      parent::__construct($prenom, $nomDeFamille);
      $this->CoursEnseigne = $course;
    }

    public function getTitle():string{
      return 'Professeur '.$this->GetFullName();
    }

    public function getDescription(): string{
      return 'Enseigne : '.$this->CoursEnseigne->getTitle();
    }
}

?>