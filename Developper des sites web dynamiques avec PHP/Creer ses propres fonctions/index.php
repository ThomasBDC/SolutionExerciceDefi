<?php

function greetings(string $name, int $age, array $favLangages = []){
    echo "Bonjour, je m'appelle ".$name." et j'ai ".$age." ans. <br/>";
    if(empty($favLangages)){
        echo "Je n'ai pas de langage de programmation favori<br/>";
    }
    else{
        echo("J'ai ".count($favLangages)." langages de programmation favoris, il s'agit de : ".implode(", ", $favLangages))."<br/>";
    }

    $cptCalls = countGreetings();
    echo("LA fonction a été appelée ".$cptCalls." fois <br>");
}

function countGreetings(){
    static $cpt = 0;
    $cpt++;
    return $cpt;
}

greetings('Laure', 27, ['PHP', 'Python']);
greetings('Julie', 26);
greetings('Laure', 27, ['PHP', 'Python']);
greetings('Julie', 26);
greetings('Laure', 27, ['PHP', 'Python']);
greetings('Julie', 26);
greetings('Laure', 27, ['PHP', 'Python']);
greetings('Julie', 26);



?>