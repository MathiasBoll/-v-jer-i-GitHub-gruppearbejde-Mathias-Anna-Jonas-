/*document hvor vi linker til vores htmltags / elementer, så vi kan bruge dem i vores js code. Mens queryselector er for burger-icon */ 
const hamburgericon = document.querySelector('.burger-icon')
const navUL = document.querySelector('.nav-ul')

/*Der tilføjes en click event på vores burger-ikonet*/ 
hamburgericon.addEventListener('click', () => {

    /*Når der trykkes på burger-ikonet tilføjes 'show' classen, og menuen bliver vist*/ 
    /*Toggle fungere som tænd og sluk knap*/
    navUL.classList.toggle('show');
});

/*Når tilføjes på click event på navul tagget, (når der klikkes i på den sorte boks fjernes) */
navUL.addEventListener('click', () => {

    /*show classen fjernes*/
    navUL.classList.remove('show')
})


