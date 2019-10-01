<?php
include ('../../conexao/conexao.php');

$id_cadastro = $_POST['id_cadastro'];
$nomeContato = $_POST['nomeContato'];
$enderecoContato = $_POST['enderecoContato'];
$telefoneContato = $_POST['telefoneContato'];
$celularContato = $_POST['celularContato'];
$emailContato = $_POST['emailContato'];


$nomeContato = utf8_decode($nomeContato);
$enderecoContato = utf8_decode($enderecoContato);


$sql = "UPDATE contato
        SET nomeContato = '".$nomeContato."',
        enderecoContato = '".$enderecoContato."',
        telefoneContato = '".$telefoneContato."',
        celularContato = '".$celularContato."',
        emailContato = '".$emailContato."'  
        WHERE id_cadastro = ".$id_cadastro."
";

    if(mysqli_query($conecta, $sql)){
        $data = array("return" => true);
    }else{
        $data = array("return" => mysqli_error($conecta));
    }


echo json_encode($data);







//$data = array("return" => "O gado ".$nomeGado.", foi cadastrado com sucesso!");
//echo json_encode($data);

?>