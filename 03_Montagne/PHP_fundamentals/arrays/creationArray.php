<h1>Création d'arrays</h1>

<h2>Array de pays</h2>
<?php
$countries = array( 'Belgium', 'France' , 'Germany', 'Netherlands', 'Ukraine' ); 
array_push($countries, 'England');
echo '<pre>';
print_r($countries);
var_dump($countries);
?>

<h2>Array de famille</h2>
<?php
$family = array('Nathalie', 'Charles', 'Gaelle', 'Liliane', 'Maurice', 'Matthieu');

print_r($family);
var_dump($family);
echo "<br>";

?>

<h2>Array de recettes</h2>
<?php
$recipes = array('Tiramisu', 'Entremet', 'glace', 'gaufre');
print_r($recipes);
echo "<br>";
var_dump($recipes);
?>

<h2>Array de films favoris</h2>
<?php
$movies = array('Supernatural', 'Pirates des Caraïbes', 'Scream', 'Netflix');
echo " " . $movies[1];
echo "<br>";
var_dump($movies);
?>