<?php
    require_once 'game.php';
?>

<html>
<head>
    <title>latest alpha 0.0.1.8</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css"/>
    <script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="database.js"></script>
    <style>#testButton{display:block;}</style>
    </head>
<body>
    <h1><u>The art of cards</u></h1>
    <div id="testButton" style="position:absolute;top:0;left:0;width:100px;height:100px;background:orange;"><?php echo $gamestats; ?></div>
    <div id="content">
        <div id="qu"></div>
        <div id="ans"></div>
        
    </div>
    
    <script src="script.js"></script>
</body>
     
</html>
