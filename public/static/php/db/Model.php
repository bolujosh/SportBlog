<?php
class Model{

    public $host="localhost";
    public $db="9jatweet";
    private $conn;

    function __construct(){
        try{
            $this->conn=new PDO("mysql:host=$this->host;dbname=$this->db;charset=UTF8","root","root");
        }catch(PDOException $e){
            echo $e->getMessage();
        }
        return $this->conn;
    }

    public function conn(){
        $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        return $this->conn;
    }

}