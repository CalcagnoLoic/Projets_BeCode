<h2>Exercice n°7 : The girl soccer team without else</h2>
<form action="" method="get">
    <label for="age">Please, type your age : </label>
    <input type="" name="age"><br>
    <label for="name">Please, type your name : </label>
    <input type="" name="name"><br>
    <label for="gender"> Please, type your gender : </label>
    <input type="" name="gender"><br>
    <input type="submit" name="submit" value="Submit">
</form>

<?php
/**
  *----------------------------------------------------
  *                 Exercice n°7
  *       Display a message according to info in input
  *----------------------------------------------------
  */

if(isset($_GET['age']) AND isset($_GET['gender'])){
    if($_GET['gender'] == "woman" && $_GET['age'] > 21 && $_GET['age'] < 40) {echo "welcome to the team !";}
    if($_GET['gender'] == "man" && $_GET['age'] < 21 && $_GET['age'] > 40) {echo "Sorry you don't fit the criteria";}
}
?>
