//börja med att skapa ref till html element
let aliasInput = document.querySelector('#aliasName');
let btn_send = document.querySelector('#sendBtn');

//api key: dG4EObWynz0oaUjfg3WgCdnsX2J5cVXm0a2Ln8G2
let apiRoverRef = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=dG4EObWynz0oaUjfg3WgCdnsX2J5cVXm0a2Ln8G2";
let containerRoverRef = document.querySelector('.card_container');

fetch(apiRoverRef)
    .then(response => (response.json()))
    .then(data => {
        //vad vil vi göra med data?
        console.log(data.photos[4].img_src);
        let myArrayLength = data.photos.length;
        console.log(myArrayLength);
        if (myArrayLength === 0) {
            console.log('Det finns ingen data');
        } else {
            console.log('Det finns data');
            for (let i = 0; i < 4; i++) {
                //vad ska hända för varje varv i loop
                console.log(data.photos[i].img_src);
                containerRoverRef.innerHTML += `<article class="card"><h4>${data.photos[i].rover.name}</h4><figure><img class="rover" src="${data.photos[i].img_src}" alt=""></figure><h4>${data.photos[i].earth_date}</h4></article>`;

            }
        }
    })

    .catch(error => console.log(`Detta är felet: ${error}`));

//lyssna efter user släpper upp en tangent
aliasInput.addEventListener('keyup', function () {
    //vadn händer närunser släpper tanget
    // console.log('Tryck');
    //äta värdet in input
    // console.log(aliasInput.value.length);
    //spara antalet tecken i variabel
    let getValueLength = aliasInput.value.length;
    console.log(getValueLength);
    if (getValueLength > 2) {
        console.log('Nu är det mer än 2 tecken');
        //ta bort diasabled från btn
        btn_send.disabled = false;
    } else {
        console.log('Nu är det mindre än 2 tecken');
        btn_send.disabled = true;
    }
});
//lyssnare som lysssnar efet fokus
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
    //rensar input
    aliasInput.value = '';
    if (aliasInput.value === '') {
        btn_send.disabled = true;
    }
});

