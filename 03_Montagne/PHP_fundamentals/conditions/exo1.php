<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 1 : Condition </title>
</head>
<body>

    <?php 
    $temperatures = 18;

    if($temperatures >= 15) {
        $clothes = "T-Shirt";
        $should_i_wear_a_scarf = false;
        echo $clothes. " " .$should_i_wear_a_scarf;
    } else {
        $clothes = "Pull-over";
        $should_i_wear_a_scarf = true;
        echo $clothes. " " .$should_i_wear_a_scarf;
    }
    ?>
    
</body>
</html>