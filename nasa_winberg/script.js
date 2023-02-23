//börja med att skapa ref till html element
let aliasInput = document.querySelector('#aliasName');
let btn_send = document.querySelector('#sendBtn');

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

