<?php
class Model{

    public $host="localhost";
    public $db="9jatweet";
    private $conn;

    function __construct(){
        try{
            $this->conn=new mysqli("localhost","root","root");
        }catch(Exception $e){
            echo $e->getMessage();
        }
        return $this->conn;
    }

    public function conn(){
        $this->conn->select_db("9jatweet");
        return $this->conn;
    }

}