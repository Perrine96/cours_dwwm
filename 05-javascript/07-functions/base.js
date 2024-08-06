/* => structure fonction
function nom() {
    code
}

=> appeler la fonction
 nom();
*/


function direBonjour() {
    console.log("Bonjour"); // return auto
}

direBonjour();

// ------------------

function addition(a, b) {
    let result = a + b;
    return result; // return obligatoire
}

console.log(addition(2, 3));
