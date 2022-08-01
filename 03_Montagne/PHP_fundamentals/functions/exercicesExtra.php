<h2>Fonction permettant de calculer un factoriel</h2>
<?php
function factorial($n) {
    if($n == 0){
        return 1;
    } else {
        return $n * factorial($n-1);
    }
}

echo 'Le factoriel de 5 est ' . factorial(5);
?>

<h2>Fonction permettant de savoir si un nombre est premier ou non</h2>
<?php
function nbrPremier($n) {
    if ($n % $n == 0 && $n % 1 == 0) {
        return "nombre premier";
    } else {
        return "nombre non premier";
    }
}

echo nbrPremier(6);
?>

<h2>Fonction permettant d'inverser un string</h2>
<?php
function reverseString($str) {
    $nbrLen = strlen($str);
    if($nbrLen == 1) {
        return $str;
    } else {
        $nbrLen--;
        return reverseString(substr($str ,1, $nbrLen)) . substr($str, 0, 1);
    }
}

echo "Mot avant inversion : " . "bymbex";
echo "<br>";
echo "Mot après inversion : " . reverseString("bymbex");
?>

<h2>Fonction permettant d'arranger un array</h2>
<?php
/**
 * TODO
 */
?>

<h2>Fonction permettant de vérifier qu'un string est entièrement en lowercase</h2>
<?php
function isLowerCase($str) {
    for ($i=0; $i < strlen($str); $i++) { 
        if ($str[$i] === "AZERTYUIOPMLKJHHGFDSQWXCVBN") {
            return "Pas en lowercase";
        } else {
            return "En lowercase";
        }
    }
}

echo isLowerCase("yvuhin");
/**
 * ne fonctionne pas!!!!
 */
?>

<h2>Fonction permettant de savoir si un string est un palindrome ou non </h2>
<?php
function palindrome($str) {
    return ($str == strrev($str)) ? "C'est un palindrome" : "Ce n'est pas un palindrome";
}

echo "Mot tester : kayak  => " . palindrome("kayak");
echo "<br>";
echo "Mot tester : anorak  => " . palindrome("anorak");
?>