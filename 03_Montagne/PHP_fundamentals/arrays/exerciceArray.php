<h1>Exercice sur les arrays</h1>
<?php
$me = array(
    'age' => 29,
    'season' => 'summer',
    'soccer' => false
);
$me['hobbies'] = array('ping pong', 'tennis', 'natation', 'codage');
$me['hobbies'][] = 'taxidermy';
$me['name'] = ['Loïc', 'Bernard'];

$friend = array(
    'age' => 39,
    'season' => 'winter',
    'soccer' => true
);
$friend['hobbies'] = array('arc', 'netflix', 'natation', 'lecture');

echo '<pre>';
$arr_replacement = $me['name'] = array('Loïc', 'Calcagno');
print_r($me);
array_replace($me['name'], $arr_replacement);
echo "<br>";
echo "Le nombre total d'hobbies pour moi est " . count($me['hobbies']) . ".";
echo "<br>";
echo "Le nombre total d'hobbies de mon ami est " . count($friend['hobbies']) . ".";
echo "<br>";
$hobbiesMe = count($me['hobbies']);
$hobbiesFriend = count($friend['hobbies']);
$total = $hobbiesFriend + $hobbiesMe;
echo "Le nombre total d'hobbies à nous deux est égal à " . $total . ".";
echo '</pre>';
?>

<h1>Créer un array à partir d'un autre</h1>
<?php
$me = array(
    'age' => 29,
    'season' => 'summer',
    'soccer' => false
);
$me['hobbies'] = array('ping pong', 'tennis', 'natation', 'codage');

$soulmate = array(
    'age' => 28,
    'season' => 'winter',
    'soccer' => true
);
$soulmate['hobbies'] = array('ping pong', 'foot', 'course à pied', 'codage');

echo "<pre>";
print_r($me);
print_r($soulmate);

echo "////////////////////////////////////////////////////// Intersection des hobbies en commun";
echo "<br>";

$possible_hobbies_via_intersection = array_intersect($me['hobbies'], $soulmate['hobbies']);
$possible_hobbies_via_merge = array_merge($me['hobbies'], $soulmate['hobbies']);

print_r($possible_hobbies_via_intersection);
echo "////////////////////////////////////////////////////// Merge des hobbies en commun";
echo "<br>";
print_r($possible_hobbies_via_merge);

echo "</pre>";
?>