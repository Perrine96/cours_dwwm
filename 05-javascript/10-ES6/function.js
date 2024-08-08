// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// documentation ci-dessous: 
// jsdoc: https://jsdoc.app
/**
 * 
 * fonction qui prend une liste de nombre non limitée et qui renvoie l'addition de ces nombres. (comm visible au survol)
 * @author Perrine Mallard <contact@perrine-mallard.com>
 * @param  {number[]} args 
 * @returns number
 */
// Prendre l'habitude de faire de la doc quand on fait une fonction
function addition(...args) {
    let result = 0;
    for (const nombre of args) {
        result += nombre;
    };
    return result;
};


const result = addition(1, 4, 6, 7, 89, 78, 67);
console.log(result);