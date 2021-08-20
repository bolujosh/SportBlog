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

        switch($params->action){
            case "new":
                echo createPost($params);
                break;
            case "read":
                echo getPostById($params->id);
                break;
            default:
            echo "No action specified";
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

function createPost($params){
    global $db;
    $sql="INSERT INTO posts(`category`,`title`,`subject`,`post_img_path`,`additional_media`) VALUES (:category,:title,:postSubject,:cover,:addition)";

    $data=$db->conn()->prepare($sql);
    $data->execute([
        ":category"=>$params->category,
        ":title"=>$params->title,
        ":postSubjetc"=>$params->subject,
        ":cover"=>${'media/img/'.$params->cover},
        ":addition"=>${'media/img/'.$params->addition}
    ]);
    return json_encode($data);
}