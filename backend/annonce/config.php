<?php
$servername = "localhost";
$username = "root"; 
$password = "";    
$dbname = "job_advertisements";

$connexion = new mysqli($servername, $username, $password, $dbname);

if ($connexion->connect_error) {
    die("La connexion a échoué : " . $connexion->connect_error);
}

?>
