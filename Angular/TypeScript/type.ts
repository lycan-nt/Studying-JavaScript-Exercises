enum CardSuits {Clubs, Hearts, Spades, Diamonds}

function teste() {
    let x = 1;
    if (x === CardSuits.Clubs)
    {
        alert('True');
    }
    else{
        alert('False')
    }
    console.log(CardSuits.Clubs);
}

teste();