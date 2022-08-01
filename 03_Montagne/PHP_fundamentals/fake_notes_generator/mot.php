<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mot d'excuse</title>
    <link rel="icon" href="favicon.jpg">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet"> 
</head>
<body>

    <?php 
    $nom = $_GET['name'];
    $gender = $_GET['gender'];
    $prof = $_GET['prof'];
    $motif = $_GET['motif'];
    ?>

    <h1>Mot d'excuse</h1>

    <p class="date">Le 
        <?php
            $date = date("l\, d-m-Y");
            setlocale(LC_TIME, "fr-FR");
            echo strftime("%A %d %B %G", strtotime($date));
        ?>,
    </p>

    <p class="paragraphe">Madame, monsieur,</p>

    <p class="paragraphe">Veuillez excuser l'absence de 
        <?php
            $genre = $gender == "garçon" ?  "mon fils, " : "ma fille, ";

            echo $genre . " " . $nom . ", pour cette journée.";
        ?>
    </p>

    <p class="paragraphe">En effet, 
        <?php
            echo($gender == "garçon" ?  "il " : "elle ");
        ?>

        ne pourra pas suivre le cours du professeur

        <?php
            echo $prof;
        ?>

        pour le motif suivant : 
    </p>

    <ul>
        <li> - <?php 
        echo $motif . " ";
        switch ($motif) {
            case 'maladie':
                echo " : une angine a été diagnostiquée par le medecin de famille.";
                break;

            case 'mort du petit chien':
                echo " : kiki, notre petit chihuahua s'est fait écraser ce matin.";
                break;

            case 'activité extra-scolaire':
                echo " : une compétition mondiale de tennis de table est prévue durant les heures de cours du professeur.";
                break;
            
            default:
            echo " : l'école n'est absolument pas un centre d'intérêt!";
                break;
        }
        ?>
        </li>
    </ul>
    
    <p class="paragraphe">Veuillez accepter mes salutations distinguées</p>

    <img src="logo.png" alt="Logo de l'école">
</body>
</html>