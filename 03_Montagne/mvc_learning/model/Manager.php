<?php

class Manager 
{
    protected function dbConnect()
    {
        $db = new \PDO('mysql:host=localhost;dbname=mvc_learning;charset=utf8', 'root', 'root');
        return $db;
    }
}