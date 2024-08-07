// Exercice 5
// Créez un objet "cercle" avec la propriété "rayon"
// Ajoutez une méthode "calculerPerimetre" qui calcule et renvoie le périmètre du cercle. 
// Ajoutez une méthode "calculerSurface" qui calcule et renvoie la surface du cercle. 

let cercle = {
    r: 7,
    calculerPerimetre: function() {
        perimetre = 2 * Math.PI * this.r,
        perimetre = Math.round(perimetre),
        console.log(`Le perimètre est de ${perimetre}`)
    },
    calculerSurface: function() {
        surface = Math.PI * this.r * this.r,
        surface = Math.round(surface),
        console.log(`La surface est de ${surface}`)
    }
};

cercle.calculerPerimetre();
cercle.calculerSurface();
