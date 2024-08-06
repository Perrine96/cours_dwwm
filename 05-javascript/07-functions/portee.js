// toujours let ou const : pas de var!
let a = 6;
// var b = 8 // portée globale
let b = 8;

if (true) {
    // encapsulation
    // var b = 7; // modification variable globale : à éviter! 
    let b = 7; // portée locale
    console.log(b);
}

console.log(a);
console.log(b);