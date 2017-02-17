<html>
    <head>
        <title>First program</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
        <div class="form-card col-md-6 col-md-offset-3">
            <?php
            $message = "";
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $message = $_POST["opinion"];
                echo ("<p>You posted your opinion - {$message}, thanks!</p>");
            } else if ($_SERVER["REQUEST_METHOD"] == "GET") {
                $message = $_GET["opinion"];
                echo ("<p>You requested response for your opinion - {$message}, thanks!</p>");
                echo "<p>Your opinion is very important to us!</p>";
            }
            ?>
            <button class="btn btn-primary" onclick="window.history.back()">Go back to cosmos</button>
        </div>
    </body>
</html>