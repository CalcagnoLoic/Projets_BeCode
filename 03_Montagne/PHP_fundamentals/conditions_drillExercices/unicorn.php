<h2>Exercice sur l'identité</h2>

<form action="" method="get">
    <label for="question"> Are you human, cat or unicorn? </label> <br>
    <input type="radio" name="question" value="human"> Human <br>
    <input type="radio" name="question" value="cat"> Cat <br>
    <input type="radio" name="question" value="unicorn"> Unicorn <br>
    <input type="submit" value="Submit"> 
</form>


<?php
$cat =  "<iframe src='https://giphy.com/embed/ICOgUNjpvO0PC' width='480' height='359' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>";
$human = "<iframe src='https://giphy.com/embed/axDAaFTxQo4JuGNktu' width='480' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>";
$unicorn = "<iframe src='https://giphy.com/embed/HULqwwF5tWKznstIEE' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>";

echo($_GET['question'] === 'human'? $human : ($_GET['question'] === 'cat' ? $cat : $unicorn));

?>




