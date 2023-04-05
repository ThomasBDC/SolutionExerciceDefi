<?php

require_once 'Student.php';
require_once 'Course.php';
require_once 'Teacher.php';
require_once 'functions.php';
require_once 'Personne.php';

$french = new Course('Français', 'La langue de Molière');
$computerScience = new Course('Informatique', 'Apprendre à développer des sites internet');
$john = new Student('John', 'Doe', [$french, $computerScience]);
$laure = new Teacher('Laure', 'Dupond', $computerScience);

displayDescription($french);
displayDescription($computerScience);
displayDescription($john);
displayDescription($laure);

?>