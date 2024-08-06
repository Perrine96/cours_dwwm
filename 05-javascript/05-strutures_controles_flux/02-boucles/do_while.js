// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question('Saisissez votre âge : ', (age) => {
//     if (age >= 18) {
//         console.log('Vous êtes majeur');
//     }
//     else {
//         console.log('Vous êtes mineur');
//     }
//     rl.close();
// });

let nombre = 10;
do {
    console.log("nombre : ", nombre);
    nombre--;
} while (nombre > 5);