<h1>Exercices sur les boucles</h1>

<h2>Exercice n°1 : Création d'une répétition avec la boucle `while`</h2>
<?php 
$number = 1;
while($number <= 120) {
    echo $number ++ . " ";
}
?>

<h2>Exercice n°2 : Création d'une répétition avec la boucle `for`</h2>
<?php 
for ($numbers = 1; $numbers <= 120 ; $numbers ++) { 
    echo $numbers ++ . " ";
}
?>

<h2>Exercice n°3 : Création d'un array et display les prénoms de l'équipe</h2>
<?php 
$team = ['Loïc', 'Sarah', 'Anaïs', 'Elise', 'Axel', 'Matthias', 'Pierre', 'Kevin', 'Amoryne', 'Phillipe', 'Pierre', 'Corentin', 'David'];
foreach ($team as $firstame) {
    echo $firstame . " - ";
}
?>

<h2>Exercice n°4 : Menu déroulant avec des pays</h2>
<?php 
$countries = array('DE' => 'Allemagne', 'AT' => 'Autriche', 'BE' => 'Belgique', 'ES' => 'Espagne', 'EE' => 'Estonie' , 'FR' => 'France', 'IT' => 'Italie', 'PL' => 'Pologne', 'PT' =>'Portugal', 'CH' => 'Suisse');
?>
<label for="pays">Choisi un pays en Europe :</label>
<select name="" id="">
    <option value="">Choisis un pays de ton choix...</option>
    <?php
    foreach ($countries as $key => $value) {
        echo '<option value=\'' . $key . '\'>' . $value . '</option>';
    }
    ?>
</select>
