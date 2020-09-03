var CardSuits;
(function (CardSuits) {
    CardSuits[CardSuits["Clubs"] = 0] = "Clubs";
    CardSuits[CardSuits["Hearts"] = 1] = "Hearts";
    CardSuits[CardSuits["Spades"] = 2] = "Spades";
    CardSuits[CardSuits["Diamonds"] = 3] = "Diamonds";
})(CardSuits || (CardSuits = {}));
function teste() {
    var x = 1;
    if (x === CardSuits.Clubs) {
        alert('True');
    }
    else {
        alert('False');
    }
    console.log(CardSuits.Clubs);
}
teste();
