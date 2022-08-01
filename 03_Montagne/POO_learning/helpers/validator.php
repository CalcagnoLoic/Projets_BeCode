<?php
class Validator {
    public function isCharacter($value)
    {
        if(is_string($value)) {
            echo "Le nom est valide";
        } else {
            echo "Un nom valide doit être ajouter, merci!";
        }
    }

    public function isNumber($value)
    {
        if(is_int($value)) {
            echo "Ok";
        }
    }
}
?>