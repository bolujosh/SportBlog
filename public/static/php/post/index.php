<?php
require_once "../db/Model.php";

$db=new Model();

$sql="SELECT `id` FROM `posts`";

$data=$db->conn()->query($sql);

while($row=$data->fetch_assoc()){
    echo $row;
}