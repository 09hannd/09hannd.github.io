String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function randInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


var cards = [];
var playedQuestions = []


function pickQuestion(){
    var isQuestion = false;
    var hasPlayedQuestion = false;
    var card, cardType, cardText, cardId;
    while(!isQuestion){
        var number = randInt(0,database.length);
        card = database[number];
        cardType = card.cardType;
        while(playedQuestions.indexOf(card) > -1){
            var number = randInt(0,database.length);
            card = database[number];
            cardType = card.cardType;
        }
        if(cardType == "Q")isQuestion = true;
    }
    
    cardText = card.text.replaceAll("_", "<i>blank</i>");
    cardId = card.id;
    playedQuestions.push(card);
    var newElm = "<div id='currentQuestion' class='w3-card-4 w3-black w3-margin card' style='width:80%;max-width:350px;'><div class='w3-container w3-center'><br><h5>"+cardText+"</h5></div><button class='w3-btn-block w3-green' onclick='pickQuestion();'>Swap <i class='fa fa-refresh'></i></button></div>";
    document.getElementById("qu").innerHTML = newElm;
}

pickQuestion();

function generateCard(){
    var number = randInt(0,database.length);
    card = database[number];
    return card;
}



function pickCards(){
    var cards = Array();
    for(var i = 0; i < 5; i++){
        var card = generateCard();
        while(card.cardType == "Q" && cards.indexOf(card) > -1){
            card = generateCard();
        }
        cards.push(card);
    }
    
    for(var i = 0; i < cards.length; i++){
        card = cards[i];
        cardText = card.text.replaceAll("_", "<i>blank</i>");
        cardId = card.id;
        var newElm = "<div id='"+cardId+"' class='w3-card-4 w3-light-grey w3-margin card' style='width:80%;max-width:350px;'><div class='w3-container w3-center'><br><h5>"+cardText+"</h5></div><button class='w3-btn-block w3-blue'>Choose</button></div>";
        document.getElementById("ans").innerHTML += newElm;
    }
    
    
}

pickCards();