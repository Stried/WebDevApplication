var carBudget = budget;
var noItem = document.getElementById('noResult');
var firstItem = document.getElementById('recommendOne');
var secondItem = document.getElementById('recommendTwo');


// If Budget < Amount, (placement)Item.style.display = 'none'
//  If Budget > Amount, (placement)Item.style.display = 'initial'

if (carBudget < 100000) {
    noItem.style.display = 'block'
}
else if (carBudget > 200000) {
    firstItem.style.display = 'inline'
    secondItem.style.display = 'inline'
}
else if (carBudget > 100000) {
    firstItem.style.display = 'inline';
}
