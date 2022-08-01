<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 2 : Ajout de conditions</title>
</head>
<body>
    
    <?php
    $age = 18;
    $language = "Spanish";

    if($age <=12 AND $language == "English"){
        echo "Hello Kiddo!";
    } else {
        echo "Good day stranger!";
    }
    ?>
</body>
</html>