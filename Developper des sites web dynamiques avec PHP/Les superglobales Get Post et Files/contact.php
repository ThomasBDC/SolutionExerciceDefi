<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if(!empty($_POST)){
    ?>
        <h1>Merci d'avoir rempli le formulaire</h1>
    <?php 
        
        $messageToWrite = getMessageContact();
        echo $messageToWrite;
        writeInContactFile($messageToWrite);
    }
    else{

        ?>
        <h1>Liste des messages reçus</h1>
        <?php
    }

        //Vérifier si l'utilisateur est admin
        //il est admin si on a le parametre GET admin=1
        
        if(isset($_GET["admin"]))
        {
            if($_GET["admin"] === "1"){
                echo readContactFile();
            }
            else{
                echo "Vous devez être admin pour voir les messages";
            }
        }
        else{
            echo "Vous devez être admin pour voir les messages";
        }
        ?>
</body>
</html>

<?php

function getMessageContact(){
    $text = "";
    if(isset($_POST["name"])){
        $text .= "Nom : ". $_POST["name"]. "<br>";
    }
    
    if(isset($_POST["email"])){
        $text .= "Email : ". $_POST["email"]. "<br>";
    }
    
    if(isset($_POST["message"])){
        $text .= "Message : ". $_POST["message"]. "<br>";
    }

    return $text;
}

function readContactFile()
{
    $file = 'contact.txt';

    if (!is_file($file)) {
        return null;
    }
    return file_get_contents($file);
}

function writeInContactFile($message)
{
    $file = 'contact.txt';

    if (!is_file($file)) {
        $current = '';
    } else {
        $current = file_get_contents($file);
    }

    $current .= $message;
    $current .= PHP_EOL;

    file_put_contents($file, $current);
}

?>