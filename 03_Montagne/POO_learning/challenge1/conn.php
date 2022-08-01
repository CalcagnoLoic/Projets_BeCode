<?php
class Connexion {

    const USERNAME = "root";
    const PASSWORD = "root";

    protected $pdo;
    protected string $server;
    protected string $db;

    public function __construct($server, $db)
    {
        $this->server = $server;
        $this->db = $db;
    }

    public function pdo()
    {
        try {
            $this->pdo = new PDO("mysql:host=$this->server;dbname=$this->db;charset=utf8", self::USERNAME, self::PASSWORD);
        } catch (Exception $e) {
            echo $e->getMessage();
        }
        
        return $this->pdo;
    }

    public function selectQuery($query) 
    {
        $sql = $query;
        $statement=$this->pdo()->prepare($sql);
        $statement->execute();
        $data = $statement->fetchAll();
        echo "<pre>";
        print_r($data);
        echo "</pre>";
    }
}
?>