let tabColors = ['bleu', 'rouge', 'vert'];
let tabColors2 = ['rose', 'saumon'];

// sans le spread
let tabColors3 = tabColors.concat(tabColors2);
// spread
let tabColors4 = [...tabColors, ...tabColors2];

console.log(tabColors3);
console.log(tabColors4);


// sans le spread
// tabColors.push('jaune');
// console.log(tabColors);
// spread
// tabColors = [...tabColors, 'violet', 'noir'];
// console.log(tabColors);