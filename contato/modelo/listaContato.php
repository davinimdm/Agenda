<?php

include('../../conexao/conexao.php');


$id_Usuario = 1;

$sql = mysqli_query($conecta, "SELECT * FROM contato WHERE id_Usuario = ".$id_Usuario."");

while ($resultado = mysqli_fetch_assoc($sql)) {
    $contato[] = array_map('utf8_encode', $resultado);
}

echo json_encode($contato);

?>

