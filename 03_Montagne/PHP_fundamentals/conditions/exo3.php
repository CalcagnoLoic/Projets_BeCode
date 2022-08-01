<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice 3 : Condition dans condition</title>
</head>
<body>
    <?php 
    $gender = "male";
    $age = 29;
    $language = "French";

    if($gender == "Female") {
        if($age <=12 AND $language == "English"){
            echo "Hello Kiddo!";
        } else {
            echo "Good day -not english- stranger!";
        }
    } else {
        if($age >=12 AND $language == "Chinese"){
            echo "Hello Kiddo!";
        } else {
            echo "Good day -not chinese- stranger!";
        }
    }
    ?>
</body>
</html>