<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="auteur" content="Loïc Calcagno">
    <meta name="description" content = "création d'une interface de génération de fausses notes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fake notes!!!</title>
</head>
<body>
    <h1>Exercice de consolidation : génération de faux mots d'excuses</h1>

    <h2>Veuillez rentrer les informations requises :</h2>

    <form action="mot.php" method="get">
        <label for="name">Entrez le nom de votre enfant, svp : </label>
        <input type="text" name="name"><br>
        <label for="gender">Entre le genre de votre enfant, svp :</label>
        <input type="radio" name="gender" value="garçon">Garçon
        <input type="radio" name="gender" value="fille">Fille<br>
        <label for="prof">Entrez le nom du professeur, svp : </label>
        <input type="" name="prof"><br>
        <label for="motif">Entre le motif de l'absence, svp :</label><br>
        <input type="radio" name="motif" value="maladie">Maladie<br>
        <input type="radio" name="motif" value="mort du petit chien">Mort du petit chien<br>
        <input type="radio" name="motif" value="activité extra-scolaire">Activité extra-scolaire<br>
        <input type="radio" name="motif" value="autre">Autre<br>
        <input type="submit" value="Envoyer">
    </form>

</body>
</html>