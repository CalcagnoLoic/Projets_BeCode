<html>
    <head><title>Exercice sur les variables</title></head>

    <body>
        <?php 
        $name = "Loïc";
        $age = "29";
        $eyes = "brown";
        $family = array(
            '0' => "Nathalie", 
            '1' => 'Charles'
        );
        $hungry = true;
        ?>
        
        <p>Hi! My name is <?php echo $name ?>!</p>

        <p>I am <?php echo $age?> old.</p>

        <p>My eyes are <?php echo $eyes?>.</p>

        <p>The first person in my family is <?php echo $family['0']?>.</p>

        <p>Do you hungry? <?php echo $hungry?> A boolean of course!</p>
    </body>
</html>