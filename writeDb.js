/*
alpha code to write to database.
This is gonna take some time!
*/
alert("writeDb.js loaded");

function sendData(){
     $.post("send.php",
        {
          name: "H",
          city: "A"
        },
        function(data,status){
            alert(data);
        });
}

