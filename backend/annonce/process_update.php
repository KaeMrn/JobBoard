<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $titre = $_POST['title'];
    $description = $_POST['description'];
    $salaire = $_POST['salary'];
    $localisation = $_POST['location'];
    $entreprise_id = $_POST['company_id'];
    $telephone = $_POST['phone'];

    // Requête de mise à jour
    $sql = "UPDATE advertisements SET 
            title='$titre', 
            description='$description', 
            salary='$salaire', 
            location='$localisation', 
            company_id='$entreprise_id', 
            phone='$telephone', 
            updated_at=CURRENT_TIMESTAMP 
            WHERE id = $id";

    if ($connexion->query($sql) === TRUE) {
        echo "Enregistrement mis à jour avec succès.";
    } else {
        echo "Erreur : " . $sql . "<br>" . $connexion->error;
    }
}
?>
