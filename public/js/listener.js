const hamburguer = document.querySelector('#hamburguer')
const nav = document.querySelector('#nav')
const x = document.querySelector('#x')
const btn_switch = document.querySelector('#btn_switch')


// Btn abrir nav

hamburguer.addEventListener('click',()=> {
    hamburguer.style.display= 'none';
    btn_switch.style.display= 'none';


    nav.classList.add('visible')
});

// Boton cerrar del nav
x.addEventListener('click',()=>{
    nav.classList.remove('visible');
    hamburguer.style.display= 'block';
    btn_switch.style.display= 'flex';
})


// Darkmode
const logo = document.querySelector('.icon_logo');
const logo_footer = document.querySelector('.logo_footer');
const firma = document.querySelector('.firma')
const body = document.body;
const home = document.querySelector('.home')


btn_switch.addEventListener('click', ()=>{
    document.body.classList.toggle('light')
    btn_switch.classList.toggle('active')
    if(body.classList.contains('light')){
        console.log("funca");
        // logo.src = "/public/img/lightmode/logo-light.png"
        logo_footer.src = "/public/img/lightmode/logo-light.png"
        firma.src= "/public/img/lightmode/firma_light.png"
        hamburguer.src = "/public/img/lightmode/hamburguer_light.png"
        x.src= "/public/img/lightmode/X-light.png"
        // home.src = "..img/lightmode/home.png";

        leer.style.color = "#904b5e";
        if (isHomePage()) {
        logo.src = "./img/lightmode/logo-light.png"
        console.log("queeeee")
        }
        // else{
            
        //     // logo.src = "./img/icons/logo.png"
        // }
      
    }else{
        logo.src = "../img/icons/logo.png"
        logo_footer.src = "../img/icons/logo.png"
        firma.src= "../img/icons/firma.png"
        x.src= "../img/icons/X.png"
        hamburguer.src= "../img/icons/hamburguer.png"
        // home.src = "../img/icons/home-.png";

        // leer.style.color = "#5e87b3";
        // home.src = "../img/icons/home-.png";

    }
})


function isHomePage() {
    return window.location.pathname === '/public/index.html'; // Comprueba la URL actual
}