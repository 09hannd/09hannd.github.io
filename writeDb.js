/*
alpha code to write to database.
This is gonna take some time!
*/
alert("writeDb.js loaded");

function sendData(){
     alert("Clicked");
     $.post("send.php",
    {
        type: "A",
        a: "answer"
    },
    function(data, status){
        alert(data);
    });
}
