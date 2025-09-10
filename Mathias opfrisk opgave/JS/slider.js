console.log('lalala')
// variable som indeholder html element -'document.querySelector'  Henter billed-elementet fra hmtlen med klassen "image-in-slider"
const imageinslider = document.querySelector('.image-in-slider')
//Når der klikkes på next knappen så kører next funktionen og billedet skifter
const btnNext = document.querySelector('.next')




// index Holder styr på hvilket billede der vises i øjeblikket
let currentImageindex = 0;
// Array med Liste over billedstier som der en efter en, der skal vises i slideren
let images = [

    'assets/img/slider/hero_img.jpg',
    'assets/img/slider/hero_img2.jpg',
    'assets/img/slider/hero_img3.jpg'
]

// Funktion til at opdatere billedets "src"-attribut med det aktuelle billede på img tagget i htmlen
function setActiveSlide(){

    imageinslider.src = images[currentImageindex];
}
// Viser det første billede, når siden indlæses
setActiveSlide()

// Funktion til at vise næste billede i rækken
function next() {
      // Hvis der er flere billeder tilbage i arrayet, så viser den det næste 
    if(currentImageindex < images.length - 1){

    currentImageindex += 1
    } else {
         // Hvis vi er nået til sidste billede, så starter den forfra
        currentImageindex = 0
    }
    // Opdater billedet i slideren
    setActiveSlide()

}
// Skifter automatisk billede hvert 5. sekund
setInterval(next, 5000)

// Kan kun kalde funktionen efter den er blevet oprettet, det ville sige man skal skrive funktionen og derefter uden for {} så kalder man på funktionen igen for at aktivere den.

//Når der klikkes på next knappen så kører next funktionen (aka frem) og billedet skifter
btnNext.addEventListener('click', next)