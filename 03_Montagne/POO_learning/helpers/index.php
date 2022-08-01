<?php 
require "form.php";
require "html.php";
require "validator.php";
$mod = new Html();
$val = new Validator();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo $mod->addMeta("Author", "Loïc Calcagno")?>
    <?php echo $mod->addMeta("Description", "Learning POO")?>
    <?php echo $mod->addLink("style.css")?>
    <title>Helpers</title>
</head>
<body>
    <?php
    echo $mod->addImg('img.jpg', "Image");
    ?>

    <div>
    <?php
        $form = new CreateForm();
        echo $form->form("post");
        echo $form->createInput("Nom", "Entrez votre nom svp");
        $name = $_POST['name'];
        echo $val->isCharacter($name);

        echo $form->createSelect("Ville", "une ville", "Belgique", "France", "Suisse");
        echo $form->createTextArea(5,10, "Petite présentation");
        echo "Inscrit à la newsletter?";
        echo $form->createRadio();
        echo $form->createCheckBox("Acceptez vous la charte du site?");
        echo $form->submit();
        echo $form->endingForm();

        echo $mod->addTagA("https://becode.org/fr/apprendre/developpeur-web-junior/", "Deviens développeur web en 7 mois!")
    ?>
    </div>
    
    <?php echo $mod->addScript("script.js")?>
</body>
</html>