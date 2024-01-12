<?php
    require("con.php");
    $rawData = file_get_contents("php://input");
    $id = $_POST['id'];

     $query = "DELETE FROM contatos WHERE id = $id";
    $contatos = sql($query);
    echo json_encode("Contato Deletado com sucesso");
?>