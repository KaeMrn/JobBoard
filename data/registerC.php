<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$response = array();

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $contact_email = $_POST['contact_email'];
    $industry = $_POST['industry'];
    $location = $_POST['location'];
    $password = $_POST['password'];
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    require_once "database.php"; 
    $token = bin2hex(random_bytes(50));

    $sql = "SELECT * FROM companies WHERE contact_email = ?";
    $stmt = mysqli_stmt_init($conn);
    
    if ($stmt) {
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "s", $contact_email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $rowCount = mysqli_num_rows($result);
        mysqli_stmt_close($stmt);

        if ($rowCount > 0) {
            $response['error']['email'] = "L'email est déjà associé à un compte.";
        } else {
            $sql = "INSERT INTO companies (name, contact_email, industry, location, password, token) VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = mysqli_stmt_init($conn);

            if ($stmt) {
                mysqli_stmt_prepare($stmt, $sql);
                mysqli_stmt_bind_param($stmt, "ssssss", $name, $contact_email, $industry, $location, $passwordHash, $token);
                mysqli_stmt_execute($stmt);
                $response['success'] = "Inscription réussie";
            } else {
                $response['error']['message'] = "L'inscription a échoué";
            }
        }
    } else {
        $response['error']['message'] = "L'inscription a échoué";
    }
} else {
    $response['error']['message'] = "Requête invalide";
}
echo json_encode($response);
?>
