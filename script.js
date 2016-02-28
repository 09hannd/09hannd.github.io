String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function randInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


function pickQuestion(){
    var isQuestion = false;
    var card, cardType, cardText, cardId;
    while(!isQuestion){
        var number = randInt(0,database.length);
        card = database[number];
        cardType = card.cardType;
        cardText = card.text.replaceAll("_", "<i>blank</i>");
        cardId = card.id;
        
        var newElm = "<div id='currentQuestion' class='w3-card-4 w3-black w3-margin l' style='width:80%;max-width:350px;'><div class='w3-container w3-center'><br><h5>"+cardText+"</h5><a href='#' class='w3-left w3-section w3-text-green'>Report Error</a></p></div></div>";
        
        
        if(cardType == "Q")isQuestion = true;
    }
    document.getElementById("qu").innerHTML = newElm;
    document.getElementById("currentQuestion").style.left = window.innerWidth - document.getElementById("currentQuestion").outerWidth / 2;
}

pickQuestion();