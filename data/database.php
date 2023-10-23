<?php
$hostname = 'localhost';  
$username = 'root'; 
$passwords = ''; 
$database = 'job_advertisements'; 
$conn = mysqli_connect($hostname, $username, $passwords, $database);
if (!$conn) {
    die("La connexion à la base de données a échoué : " . mysqli_connect_error());
}
?>