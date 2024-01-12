<?php
    require("con.php");
    $rawData = file_get_contents("php://input");
    $id = $_POST['id'];
    $name = $_POST['name'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $title = $_POST['title'];

     $query = "UPDATE contatos SET name='$name', lastName='$lastName', email='$email', phone='$phone', title='$title' WHERE id = $id";
    $contatos = sql($query);
    echo json_encode("Contato registrado com sucesso");
?>