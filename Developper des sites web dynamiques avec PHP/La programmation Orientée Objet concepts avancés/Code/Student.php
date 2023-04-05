<?php
require_once 'Personne.php';
require_once 'Course.php';

class Student extends Personne 
{
  public array $Courses;
  public function __construct(string $prenom, string $nomDeFamille,array $courses)
  {
    parent::__construct($prenom, $nomDeFamille);
    $this->Courses = $courses;
  }

  public function getTitle():string{
    return $this->GetFullName();
  }

  public function getDescription(): string{
    /*
     $allTitle = [];
      foreach ($this->courses as $course)
      {
          $allTitle[] = $course->title;
      }
      Correspond à la ligne 27
      */
    $allTitle = array_map(fn($course): string => $course->getTitle(), $this->Courses);
    $allCourses = implode(', ', $allTitle);
    
    return 'Etudie : '.$allCourses;
  }
}

?>