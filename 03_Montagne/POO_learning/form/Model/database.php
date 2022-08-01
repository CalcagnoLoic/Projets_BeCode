<?php
class Connexion{

    protected $username = 'root';
    protected $password = 'root';

    public function __construct($server, $db)
    {
        $this->server = $server;
        $this->db = $db;
    }

    public function pdo()
    {
        try {
            $this->pdo = new PDO("mysql:host=$this->server;dbname=$this->db;charset=utf8", $this->username, $this->password);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        
        return $this->pdo;
    }
}
?>