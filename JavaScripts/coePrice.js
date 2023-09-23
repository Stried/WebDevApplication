
var buttonOne = 'July 1st Bidding';
var buttonTwo = 'July 2nd Bidding';
var buttonThree = 'August 1st Bidding';

document.getElementById('firstButton').innerText = buttonOne;
document.getElementById('secondButton').innerText = buttonTwo;
document.getElementById('thirdButton').innerText = buttonThree;

function buttonFirst() {
    document.getElementById('spanCoeMonth').innerText = buttonOne;

    var tableFirst = document.getElementById('tableOne')
    tableFirst.style.display = 'initial'

    var tableSecond = document.getElementById('tableTwo')
    tableSecond.style.display = 'none'

    var message = document.getElementById('errorMessage')
    message.style.display = 'none'
}

function buttonSecond() {
    document.getElementById('spanCoeMonth').innerText = buttonTwo;

    var tableFirst = document.getElementById('tableOne')
    tableFirst.style.display = 'none'

    var tableSecond = document.getElementById('tableTwo')
    tableSecond.style.display = 'initial'

    var message = document.getElementById('errorMessage')
    message.style.display = 'none'
}

function buttonThird() {
    document.getElementById('spanCoeMonth').innerText = buttonThree;

    var tableFirst = document.getElementById('tableOne')
    tableFirst.style.display = 'none'

    var tableSecond = document.getElementById('tableTwo')
    tableSecond.style.display = 'none'

    var message = document.getElementById('errorMessage')
    message.style.display = 'block'
}