<html>
    <head>
        <title>Form submition</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
    <div class="form-card col-md-6 col-md-offset-3">
        <p>Your name: <?php echo $_POST["name"]; ?></p>
        <p>Your password: <?php echo $_POST["pwd"]; ?></p>
        <p>Your email: <?php echo $_POST["email"]; ?></p>
        <p>You are <?php echo $_POST["select-class"]; ?></p>
        <button class="btn btn-primary" onclick="window.history.back()">Go back to cosmos</button>
    </div>
    </body>
</html>