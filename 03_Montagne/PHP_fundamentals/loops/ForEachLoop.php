<h1>Exercice sur la boucle ForEach</h1>

<?php
$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');

foreach ($pronouns as $pronoun) {
    $verb = "code";
    $s = "s";
    if ($pronoun == "He/She") {
        echo $pronoun. " " . $verb . $s . "</br>";
    } else {
        echo $pronoun . " " . $verb . "</br>";
    }
}
?>

