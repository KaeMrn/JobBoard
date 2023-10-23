<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *"); 

if ($_SERVER["REQUEST_METHOD"] === 'POST') {
    $email = $_POST["email"];
    $password = $_POST["password"];
    $response = array();
    require_once "database.php";
    
    $sql_people = "SELECT * FROM people WHERE email = ?";
    $sql_companies = "SELECT * FROM companies WHERE email = ?";
    $stmt = mysqli_stmt_init($conn);
    if ($stmt) {
        mysqli_stmt_prepare($stmt, $sql_people);
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $user = mysqli_fetch_assoc($result);
        if (!$user) {
            mysqli_stmt_prepare($stmt, $sql_companies);
            mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $user = mysqli_fetch_assoc($result);
        }
        if ($user) {
            if (password_verify($password, $user['password'])) {
                if ($user['token'] !== null && !empty($user['token'])) {
                    $response['success'] = "Connexion réussie";
                    session_start();
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['email'] = $user['email'];
                } else {
                    $response['error'] = "Token manquant ou invalide. La connexion a échoué.";
                }
            } else {
                $response['error'] = "Le mot de passe est incorrect";
            }
        } else {
            $response['error'] = "L'email ne correspond à aucun compte.";
        }
    } else {
        $response['error'] = "Échec de la requête SQL";
    }
    echo json_encode($response);
} else {
    $response['error'] = "Requête invalide";
    echo json_encode($response);
}
?>