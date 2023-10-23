<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier une Annonce d'Emploi</title>
</head>
<body>
    <h1>Modifier une Annonce d'Emploi</h1>
    <form action="process_update.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $id; ?>">
        
        <label for="title">Titre :</label>
        <input type="text" id="title" name="title" value="<?php echo $titre; ?>" required><br>

        <label for="description">Description :</label><br>
        <textarea id="description" name="description" required><?php echo $description; ?></textarea><br>

        <label for="salary">Salaire :</label>
        <input type="number" id="salary" name="salary" step="0.01" value="<?php echo $salaire; ?>" required><br>

        <label for="location">Localisation :</label>
        <input type="text" id="location" name="location" value="<?php echo $localisation; ?>" required><br>

        <label for="company_id">ID de l'Entreprise :</label>
        <input type="text" id="company_id" name="company_id" value="<?php echo $entreprise_id; ?>" required><br>

        <label for="phone">Téléphone :</label>
        <input type="text" id="phone" name="phone" value="<?php echo $telephone; ?>" required><br>

        <input type="submit" value="Enregistrer les Modifications">
    </form>
</body>
</html>
