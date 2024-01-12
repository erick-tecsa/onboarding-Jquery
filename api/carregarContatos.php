<?php
    require("con.php");
    $query = "SELECT * FROM contatos";
    $contatos = loop($query);
    echo json_encode($contatos);
?>