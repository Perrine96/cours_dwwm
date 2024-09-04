const hamburger = document.querySelector("#hamburger");
const ulMobile = document.querySelector("#nav-mobile");
const nav = document.querySelector('nav');
const main = document.querySelector('main');

// Réativer ça à chaque fois qu'il y a un changement (ici, à chaque fois qu'on resize la fenêtre): 
document.addEventListener('DOMContentLoaded', () => {
    // On récupère la hauteur: 
    // console.log(nav.offsetHeight);
    // On met un padding avec la hauteur récupérée: 
    main.style.paddingTop = `${nav.offsetHeight + 5}px`;
    ulMobile.style.marginTop = `${nav.offsetHeight}px`;
    ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`;
});

// document.addEventListener('DOMContentLoaded', () => {
//     ulMobile.style. 
// });



// hamburger
hamburger.addEventListener("click", () => {
    ulMobile.classList.toggle("toggled");
    const toggleNav = [
        { transform: "translate(100%)" },
        { transform: "translate(0)" },
    ];
    const options = {
        fill: "forwards",
        duration: 1000,
    };
    if (ulMobile.classList.contains('toggled')) {
        ulMobile.animate(toggleNav, options);
    } else {
        ulMobile.animate(toggleNav.reverse(), { ...options, duration: 1000 });
    }
});

// clic sur le body
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target)) {
      if (ulMobile.classList.contains("toggled")) {
        ulMobile.classList.remove("toggled");
        ulMobile.animate(
          [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
          { fill: "forwards", duration: 1000 }
        );
      }
    }
});

// nav disparaît au scroll
window.addEventListener("scroll", () => {
    if (scrollY > 20) {
        if (ulMobile.classList.contains('toggled')) {
            ulMobile.classList.remove('toggled');
            ulMobile.animate(
                [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
                { fill: "forwards", duration: 750 }
            );
        }
    }
});

// opacité
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 10) main.style.opacity = "0";
//     else if (window.scrollY === 0) nav.style.opacity = "1";
//   });

// nav ouverte disparaît à partir de 640px
window.addEventListener("resize", () => {
    main.style.paddingTop = `${nav.offsetHeight + 5}px`;
    if (window.innerWidth > 640) {
        if (ulMobile.classList.contains('toggled')); 
            ulMobile.classList.remove('toggled');
        {
            ulMobile.animate(
                [{ transform: "translate(0)" }, { transform: "translate(100%)" }],
                { fill: "forwards", duration: 0 }
            );
        }
    }
});

// recalcul vh
const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', appHeight)
  appHeight()


// calcul barre d'accueil 
  window.addEventListener('resize', () => {
      ulMobile.style.marginTop = `${nav.offsetHeight}px`
    });

// nav s'adapte au resize
window.addEventListener('resize', () => {
    ulMobile.style.minHeight = `${window.innerHeight - nav.offsetHeight}px`
});