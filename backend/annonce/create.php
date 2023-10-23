<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include 'config.php';

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $salary = $_POST['salary'];
    $location = $_POST['location'];
    $URL = $_POST['URL'];

    $sql = "INSERT INTO advertisements (title, description, location, salary, URL, created_at, updated_at) 
            VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

    $stmt = $connexion->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("sssis", $title, $description, $location, $salary, $URL);
        
        if ($stmt->execute()) {
            $response["success"] = "Nouvel enregistrement créé avec succès.";
            $response["status"] = "success";
        } else {
            $response["message"] = "Erreur lors de la création de l'enregistrement: " . $stmt->error;
            $response["status"] = "error";
        }
        $stmt->close();
    } else {
        $response["message"] = "Erreur lors de la préparation de la requête: " . $connexion->error;
        $response["status"] = "error";
    }
} else {
    $response["message"] = "Méthode non autorisée";
    $response["status"] = "error";
}

echo json_encode($response);
?>
