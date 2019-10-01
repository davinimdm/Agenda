<?php

include ('../../conexao/conexao.php');


$sql = "DELETE FROM contato WHERE id_cadastro = ".$_POST['id_cadastro']."";

if(mysqli_query($conecta, $sql)){
    $data = array("return" => true);
}else{
    $data = array("return" => mysqli_error($conecta));
}

echo json_encode($data);


?>