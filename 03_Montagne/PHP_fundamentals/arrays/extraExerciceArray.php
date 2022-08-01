<h1>Exercice supplémentaire sur les array</h1>

<?php
$web_development = array(
    'frontend' => ' ' ,
    'backend' => ' '
);

echo "<pre>";
$web_development['frontend'] = array('xhtml', 'CSS', 'JavaScript');
$web_development['backend'] = array('Ruby on rails', 'Flash');
$arr_replacement = $web_development['frontend'] = array('HTML', 'CSS', 'JavaScript');
array_replace($web_development['frontend'], $arr_replacement);
unset($web_development['backend'][1]);
print_r($web_development);
echo "//////////////////////////////////////////////////////";
echo "<br>";
var_dump($web_development);
echo "</pre>";
?>