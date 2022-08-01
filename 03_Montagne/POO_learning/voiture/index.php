<?php
require "voiture.php";
require "listCar.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Auto</title>
</head>
<body>
    <h1>A new auto?</h1>
    <table>
        <thead>
            <tr>
                <th>Number plate</th>
                <th>Country of registration</th>
                <th>Date of registration</th>
                <th>Number of years since circulation</th>
                <th>Mileage</th>
                <th>Model</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Type of vehicle</th>
            </tr>
        </thead>
        <tbody>
            <?php
            foreach ($cars as $items) {
                echo $items->display();
            }
            ?>
        </tbody>
    </table>
</body>
</html>