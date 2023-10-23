<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Récupérer l'ID de l'annonce à supprimer
    $id = $_GET['id'];

    // Delete avec un $get = https://localhost/Annonce/delete.php?id=1  ici apres le ?id= tu ecrit id de advetisement que tu veut delete


    // Requête de suppression
    $sql = "DELETE FROM advertisements WHERE id = $id";

    if ($connexion->query($sql) === TRUE) {
        echo "Enregistrement supprimé avec succès.";
        // Redirection vers read.php
        header("Location: read.php");
        exit(); // Assure que le script s'arrête ici pour éviter toute exécution supplémentaire
    } else {
        echo "Erreur : " . $sql . "<br>" . $connexion->error;
    }
}
?>
