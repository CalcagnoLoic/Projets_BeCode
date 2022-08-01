<?php

if(isset($name) && isset($age) && isset($artist) && isset($life) && isset($mail)) {
    echo "Fill the survey please!";
}
$name = $_POST['name'];
$age = $_POST['age'] ;
$artist = $_POST['artist'] ;
$life = $_POST['life'] ;
$mail = $_POST['mail'] ;

echo $name;
echo "<hr>";
echo $age;
echo "<hr>";
echo $artist;
echo "<hr>";
echo $life;
echo "<hr>";

/*****************************
 *      1. SANITIZE
 *****************************/
$errors = array();
$mail = filter_var($mail, FILTER_SANITIZE_EMAIL);

echo $mail;
echo "<br>";

/*****************************
 *      2. Validation
 *****************************/
if (false === filter_var($mail, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "This address is invalid.";
 }


/*****************************
 *      3. Execute
 *****************************/
if (count($errors)> 0){
	echo "There are mistakes!";
	print_r($errors);
	exit;
}
?>