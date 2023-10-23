<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    

    $sql = "SELECT * FROM advertisements WHERE id = $id";
    $result = $connexion->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $titre = $row['title'];
        $description = $row['description'];
        $salaire = $row['salary'];
        $localisation = $row['location'];
        $entreprise_id = $row['company_id'];
        $telephone = $row['phone'];

        include 'update_form_prepopulate.php';
    } else {
        echo "Aucune annonce trouvée avec cet ID.";
    }
}
?>
