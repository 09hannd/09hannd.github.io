/*
alpha code to write to database.
This is gonna take some time!
*/

$(document).ready(function(){
    $("testButton").click(function(){
        $.post("send.php",
        {
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

