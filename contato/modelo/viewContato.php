<?php

include('../../conexao/conexao.php');


$id_cadastro = $_POST['id_cadastro'];

$sql = mysqli_query($conecta, "SELECT * FROM contato WHERE id_cadastro = ".$id_cadastro."");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $contato[] = array_map('utf8_encode', $resultado);
}

echo json_encode($contato);

?>

