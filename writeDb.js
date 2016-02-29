/*
alpha code to write to database.
This is gonna take some time!
*/

function sendData(){
     $.post("send.php",
        {
          name: "Donald Duck",
          city: "Duckburg"
        },
        function(data,status){
            alert(data);
        });
}

