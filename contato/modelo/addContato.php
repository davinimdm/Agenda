<?php
include ('../../conexao/conexao.php');

$nomeContato = $_POST['nomeContato'];
$enderecoContato = $_POST['enderecoContato'];
$telefoneContato = $_POST['telefoneContato'];
$celularContato = $_POST['celularContato'];
$emailContato = $_POST['emailContato'];

$id_Usuario = 1;

$nomeContato = utf8_decode($nomeContato);
$enderecoContato = utf8_decode($enderecoContato);


if(strlen($nomeContato) > 1 && strlen($enderecoContato) > 1 && strlen($emailContato) > 1){

$sql = "INSERT INTO contato (nomeContato, enderecoContato, telefoneContato, celularContato, emailContato, id_Usuario)
        VALUES ('".$nomeContato."', '".$enderecoContato."', '".$telefoneContato."', '".$celularContato."', '".$emailContato."', ".$id_Usuario.")";
    
    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }



}else{
    $data = array("return" => "Os campos nome e endereço são obrigatório...");
}

echo json_encode($data);



?>