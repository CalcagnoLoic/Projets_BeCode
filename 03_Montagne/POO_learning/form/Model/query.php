<?php

require_once("database.php");

class User extends Connexion
{
    public $username;
    public $password;
    public $email;
    public $db = new Connexion("localhost", "poo_learning");

    public function __construct()
    {
        
    }

    public function recup()
    {
        $username = isset($_POST['name']) ? $_POST['name'] : NULL;
        $email = isset($_POST['email']) ? $_POST['email'] : NULL;
        $password = isset($_POST['password']) ? $_POST['password'] : NULL;
    }

    public function getData(){
        $statement = $db -> prepare("INSERT INTO ");
    }
}