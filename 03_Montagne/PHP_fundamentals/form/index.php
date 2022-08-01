<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Loïc Calcagno">
    <meta name="description" content="Creation of form - frontend/backend"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    
    <link rel="stylesheet" href="assets/style.css">
    <link rel="icon" href="assets/index.png">
</head>
<body>
    <main>
        <h1>Survey</h1>
        <form action="assets/form.php" method="post">
            <label for="name">What is your name?</label>
            <input type="text" name="name" id="input_name" placeholder="Your name"><br>

            <label for="age">What is your age?</label>
            <input type="number" name="age" id="input_age" min="0" max="100"><br>

            <label for="artist">Do you prefer Andy Warhol or Basquiat?</label>
            <input type="radio" value="Andy Warhol" id="input_artist" name="artist">Andy Warhol
            <input type="radio" value="Basquiat" id="input_artist" name="artist">Basquiat<br>

            <label for="life">Tell me about your life :</label>
            <textarea name="life" id="input_life" placeholder="Tell me about you..."></textarea><br>

            <label for="mail">Enter your email, please :</label>
            <input type="mail" name="mail" id="input_mail" placeholder="example@gmail.org"><br>

            <input type="submit" value="Submit" id="submit">
        </form>
    </main>
</body>
</html>