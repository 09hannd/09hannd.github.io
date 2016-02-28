String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


var answersEl = document.getElementById("answers");
var questionsEl = document.getElementById("questions");

for(x in database){
    card = database[x];
    cardType = card.cardType;
    cardText = card.text.replaceAll("_", "<i>blank</i>");
    cardId = card.id;
    
    if(cardType == "A"){
        answersEl.innerHTML += cardText + "</br>";
    }
    if(cardType == "Q"){
        questionsEl.innerHTML += cardText + "</br>";
    }
}
