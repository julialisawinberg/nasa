//ref till html element
let aliasInput = document.querySelector('#aliasName');
let btn_send = document.querySelector('#sendBtn');

//lyssna efter user släpper upp en tangent
aliasInput.addEventListener('keyup', function () {
    //vadn händer när du släpper tanget på knappen
    //spara antalet tecken i variabel
    let getValueLength = aliasInput.value.length;
    console.log(getValueLength);
    //om det du skriver är minst 3
    if (getValueLength > 2) {
        console.log('Nu är det mer än 2 tecken');
        //ta bort diasabled från btn när det är mer än 3 tecken
        btn_send.disabled = false;
        //annars är det mindre än tre tecken
    } else {
        console.log('Nu är det mindre än 2 tecken');
        //om det är mindre än tre tävken är disabel aktiverad
        btn_send.disabled = true;
    }
});
//lyssnare som lysssnar effet fokus
aliasInput.addEventListener('focus', function () {
    //vad ska hända när input är i fokus
    console.log('Du står i rutan');
    aliasInput.classList.toggle('focusBorder');
});
//lyssnare som lysssnar efet blur
aliasInput.addEventListener('blur', function () {
    //vad ska hönda när input är i fokus
    console.log('Du står utanför rutan');
    aliasInput.classList.toggle('focusBorder');
});
//lussander på btn
btn_send.addEventListener('click', function (event) {
    //vad ska hänad när jag klickar
    console.log('Klick btn');
    //abvryter kanppens defalt beteeende att skicka form
    event.preventDefault();

    //lyssnar på namn boxen
    let spacenameContainerRef = document.querySelector('.name_box_ultra');
    //sätter in i html vad som skrivs i h2an
    spacenameContainerRef.innerHTML = `<h2>Welcome ${aliasInput.value}! Lets go to space B)</h2> `;

    //sätter värde på getValue samtidigt som den skapas
    let getValue = btn_send.value;
    //rensar input
    aliasInput.value = '';
    if (aliasInput.value === '') {
        //aktiverar disable
        btn_send.disabled = true;
    }
    //öppnar dörren till getRover
    getRover(getValue);
});

//api sec

//api key: dG4EObWynz0oaUjfg3WgCdnsX2J5cVXm0a2Ln8G2
//länken till nasa
let apiRoverRef = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=dG4EObWynz0oaUjfg3WgCdnsX2J5cVXm0a2Ln8G2";
//länken till html
let containerRoverRef = document.querySelector('.card_container');

function getRover(valueIn) {
    console.log('getRover körs');
    console.log(valueIn);

    //hämtar api
    fetch(apiRoverRef)
        .then(response => (response.json()))
        .then(data => {
            //vad vill vi göra med data?
            //vi vill hämta detta från api
            console.log(data.photos[4].img_src);
            let myArrayLength = data.photos.length;


            console.log(myArrayLength);
            //om det inte finns någon data om myArrayLength är tom
            if (myArrayLength === 0) {
                console.log('Det finns ingen data');
                //kommer det upp ett meddelande till användaren
                alert("Sorry bro, no pitchers atm try again later!")
                //annars, finns det data, och då vill vi starta loopen
            } else {
                console.log('Det finns data');
                //loop för att ta in för alla fyra kort
                for (let i = 0; i < 4; i++) {
                    //vad ska hända för varje varv i loop
                    console.log(data.photos[i].img_src);
                    //placerar i html
                    containerRoverRef.innerHTML += `<article article class="card" ><h4>${data.photos[i].rover.name}</h4><figure><img class="rover" src="${data.photos[i].img_src}" alt=""></figure><h4>${data.photos[i].earth_date}</h4></article > `;


                }
            }
        })
        //för att vi sak kunna se vad som är fel, ibland hjälper den och ibland fattar man inte vad den säger 
        .catch(error => console.log(`Detta är felet: ${error} `));
}

//darkmode sec

// Skapa en ref till HTML 
let switchBtn = document.querySelector('.tgl-flip');
// console.log(switchBtn);
let bodyRef = document.querySelector('body');
// console.log(bodyRef);

//för att kolla om local storage är tom
let darkSwitch = 'dark';
//om tom
if (!localStorage.getItem(darkSwitch)) {

    console.log('det finns inget i lokalstorage');
    //kontrolera om dark lokal är satt
    chekIfDark();
    //annars inte tom
} else {
    console.log('Det finns något i lokal storage');
    chekIfDark();
}
//Skapa upp en lyssnare 
switchBtn.addEventListener('click', function () {
    //Vad ska hända vid klick? 
    //kontrolera om modyref har klassen dark
    //om darkmode är aktiverad
    if (bodyRef.classList.value === 'dark') {
        console.log('Classen dark finns på body');
        bodyRef.classList.remove('dark');
        removeLocal();

        //annars ska darkmode inte vara på body
    } else {
        console.log('Classen dark finns inte på body');
        bodyRef.classList.add('dark');
        setLocal();
    }

});

//funktion för att set localStorage
function setLocal() {
    //kod som körs när setlocal anropas
    console.log('setLocal körs');
    //setItem (key, value)
    localStorage.setItem(darkSwitch, true);

}
//funktion för att remove localStorege
function removeLocal() {
    //kod som körs när removlocal anropas
    console.log('remove körs');
    //removeItem (key);
    localStorage.removeItem(darkSwitch);
}
//kontrolera om dark finns i localStorege
function chekIfDark() {
    //kod som körs när chekIf dark klrs
    console.log('chekIfDark körd');
    //dark är sparad och det som var när användaran stängde ner eller laddade om sidan
    if (localStorage.getItem(darkSwitch)) {
        console.log('Det finns .dark i local storage');
        //för att btn ska bli chhekt))
        switchBtn.checked = true;
        bodyRef.classList.add('dark');
        //annars är det lightmode som ska startas
    } else {
        console.log('Det finns inte dark localstorige');
    }
}