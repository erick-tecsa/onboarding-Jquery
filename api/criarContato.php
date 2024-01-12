<?php
    require("con.php");
    $rawData = file_get_contents("php://input");
    $name = $_POST['name'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $title = $_POST['title'];

     $query = "INSERT into contatos (name, lastName, email, phone, title) VALUES ('$name', '$lastName', '$email', '$phone', '$title')";
   
    $contatos = sql_insert($query);
    echo json_encode("Contato registrado com sucesso");
?>