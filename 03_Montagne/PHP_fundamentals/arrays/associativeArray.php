<h1>Les arrays associatifs</h1>

<?php
$me = array(
    'age' => 29,
    'season' => 'summer',
    'soccer' => false
);

echo '<pre>';
print_r($me);
echo $me['season'];
echo '</pre>';
?>

<h1>Les arrays multidimensionnels</h1>

<?php
$me = array(
    'age' => 29,
    'season' => 'summer',
    'soccer' => false
);

$me['hobbies'] = array('ping pong', 'tennis', 'natation', 'codage');

$friend = array(
    'age' => 39,
    'season' => 'winter',
    'soccer' => true
);

$friend['hobbies'] = array('arc', 'netflix', 'natation', 'lecture');

$me['friend'] = $friend;

echo '<pre>';
print_r($me);
//print_r($friend);
echo '</pre>';
?>
