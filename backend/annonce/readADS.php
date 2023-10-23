<?php
header("Access-Control-Allow-Origin: *");
include 'config.php';

$sql = "SELECT * FROM advertisements";
$resultat = $connexion->query($sql);

$annonces = array();

if ($resultat->num_rows > 0) {
    while($ligne = $resultat->fetch_assoc()) {
        $annonces[] = $ligne;
    }
}

$connexion->close();

http_response_code(200);
echo json_encode($annonces);
?>
