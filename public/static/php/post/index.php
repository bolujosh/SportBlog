<?php
header("Content-Type:text/plain");
require_once "../db/Model.php";

$req=$_SERVER["REQUEST_METHOD"];

$db=new Model();

if($req==="GET"){
    echo getPost();
}elseif($req==="POST"){
    if(isset($_POST["data"])){
        $params=json_decode($_POST["data"]);
        if($params->action==="read"){
            echo getPostById($params->id);
        }
    }
}

function getPost(){
    global $db;
    $sql="SELECT `id`,`category`,`title`,`post_img_path` FROM `posts`";
    $list=[];

    $data=$db->conn()->prepare($sql);
    $data->execute([]);
    while($row=$data->fetch(PDO::FETCH_ASSOC)){
        $list[]=$row;
    }
    return json_encode($list);

}

function getPostById($id){
    global $db;
    $sql="SELECT `title`,`category`,`subject`,`additional_media` FROM posts WHERE id=$id";

    $data=$db->conn()->prepare($sql);
    $data->execute([]);
    $row=$data->fetch(PDO::FETCH_ASSOC);
    return json_encode($row);
}