<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', 1);
$response = array();

if (isset($_POST['first_name'])) {
    $firstName = $_POST["first_name"];
    $lastName = $_POST["last_name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $passwordRepeat = $_POST["repeat_password"];
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    function genererCode($longueur) {
        $caracteres = '0123456789abcdefghijklmnopqrstuvwxyz';
        $code = '';
        $max = strlen($caracteres) - 1;
        for ($i = 0; $i < $longueur; $i++) {
            $code .= $caracteres[mt_rand(0, $max)];
        }   
        return $code;
    }

    $code = genererCode(100);

    if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || empty($password) || empty($passwordRepeat)) {
        $response['error']['required'] = "Tous les champs sont requis";
    } 

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['error']['email'] = "L'adresse email n'est pas valide";

    } 
    if (strlen($password) < 8) {
        $response['error']['password'] = "Le mot de passe doit contenir au moins 8 caractères";

    } 
    if ($password !== $passwordRepeat) {
        $response['error']['passwordRepeat'] = "Les mots de passe ne correspondent pas";

    }

    if (empty($response['error'])) {
        require_once "database.php";
        $sql = "SELECT * FROM people WHERE email = ?";
        $stmt = mysqli_stmt_init($conn);
        if ($stmt) {
            mysqli_stmt_prepare($stmt, $sql);
            mysqli_stmt_bind_param($stmt, "s", $email);
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            $rowCount = mysqli_num_rows($result);
            mysqli_stmt_close($stmt);

            if ($rowCount > 0) {
                $response['error']['email'] = "L'email est déjà associé à un compte.";

            } else {
                $sql = "INSERT INTO people (first_name, last_name, email, phone, password, token) VALUES (?, ?, ?, ?, ?, ?)";
                $stmt = mysqli_stmt_init($conn);
                if ($stmt) {
                    mysqli_stmt_prepare($stmt, $sql);
                    mysqli_stmt_bind_param($stmt, "ssssss", $firstName, $lastName, $email, $phone, $passwordHash, $code);
                    mysqli_stmt_execute($stmt);
                    $response['success'] = "Inscription réussie";

                } else {
                    $response['error']['message'] = "L'inscription a échoué";

                }
            }
        } else {
            $response['error']['message'] = "L'inscription a échoué";

        }
    }
} else {
    $response['error']['message'] = "Requête invalide";

}

echo json_encode($response);
?>
