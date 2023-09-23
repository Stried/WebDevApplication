// Form Scripts
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&');

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var budget = getUrlParameter('budgetCurrent');
var typeCar = getUrlParameter('carType');
var typeUse = getUrlParameter('useTime');

console.table([budget,typeCar,typeUse]);

document.getElementById('budgetHere').innerText = budget
document.getElementById('typeHere').innerText = typeCar
document.getElementById('useHere').innerText = typeUse
