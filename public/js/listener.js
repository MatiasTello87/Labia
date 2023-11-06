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
const firma = document.querySelector('.firma')
const body = document.body;
const home = document.querySelector('.home')



btn_switch.addEventListener('click', ()=>{
    document.body.classList.toggle('light')
    btn_switch.classList.toggle('active')
    
    function isOnPage(pageName) {
        // Obtener la URL actual
        const currentPageURL = window.location.pathname;
        return currentPageURL.endsWith(pageName);
        }
        
        if (isOnPage('/index.html')){
        if(document.body.classList.contains('light')){
            localStorage.setItem('lightmode', 'true');
            logo.src = "./img/lightmode/logo-light.png"
            firma.src= "./img/lightmode/firma_light.png"
            x.src= "./img/lightmode/X-light.png"
            hamburguer.src= "./img/lightmode/hamburguer_light.png"
            console.log('Estás en la página inde wacho');
        }
        else{
            localStorage.setItem('lightmode', 'false');
            logo.src = "./img/icons/logo.png"
            firma.src= "./img/icons/firma.png"
            x.src= "./img/icons/X.png"
            hamburguer.src= "./img/icons/hamburguer.png"
        }
    }
    else if(isOnPage('/pages/articles.html') || isOnPage('/pages/yo.html') || isOnPage('/pages/contacto.html') || isOnPage('/pages/video.html')){
        if(body.classList.contains('light')){
            logo.src = "../img/lightmode/logo-light.png"
            firma.src= "../img/lightmode/firma_light.png"
            x.src= "../img/lightmode/X-light.png"
            hamburguer.src= "../img/lightmode/hamburguer_light.png"
            console.log('Estás en la página video');
        }
        else{
            logo.src = "../img/icons/logo.png"
            firma.src= "../img/icons/firma.png"
            x.src= "../img/icons/X.png"
            hamburguer.src= "../img/icons/hamburguer.png"
        }
    }
    else if(isOnPage('/pages/articles_pages/cande.html') || isOnPage('/pages/articles_pages/lucas.html')){
        if(body.classList.contains('light')){
            console.log("estas en lucas cande")
            logo.src = "../../img/lightmode/logo-light.png"
            firma.src= "../../img/lightmode/firma_light.png"
            x.src= "../../img/lightmode/X-light.png"
            hamburguer.src= "../../img/lightmode/hamburguer_light.png"
        }
        else{
            logo.src = "../../img/icons/logo.png"
            firma.src= "../../img/icons/firma.png"
            x.src= "../../img/icons/X.png"
            hamburguer.src= "../../img/icons/hamburguer.png"
        }
    }
    
})
// Obtener el modo actual
if(localStorage.getItem('lightmode') === 'true'){
    document.body.classList.add('light')
    btn_switch.classList.add('active')
    function isOnPage(pageName) {
        // Obtener la URL actual
        const currentPageURL = window.location.pathname;
        return currentPageURL.endsWith(pageName);
        }
    if (isOnPage('/index.html')){
        if(body.classList.contains('light')){
            logo.src = "./img/lightmode/logo-light.png"
            firma.src= "./img/lightmode/firma_light.png"
            x.src= "./img/lightmode/X-light.png"
            hamburguer.src= "./img/lightmode/hamburguer_light.png"
            console.log('Estás en la página index.html del local');
        }
        else{
            logo.src = "./img/icons/logo.png"
            firma.src= "./img/icons/firma.png"
            x.src= "./img/icons/X.png"
            hamburguer.src= "./img/icons/hamburguer.png"
        }
    }
    else if(isOnPage('/pages/articles.html') || isOnPage('/pages/yo.html') || isOnPage('/pages/contacto.html') || isOnPage('/pages/video.html')){
        if(body.classList.contains('light')){
            logo.src = "../img/lightmode/logo-light.png"
            firma.src= "../img/lightmode/firma_light.png"
            x.src= "../img/lightmode/X-light.png"
            hamburguer.src= "../img/lightmode/hamburguer_light.png"
            console.log('Estás en la página video del local');
        }
        else{
            logo.src = "../img/icons/logo.png"
            firma.src= "../img/icons/firma.png"
            x.src= "../img/icons/X.png"
            hamburguer.src= "../img/icons/hamburguer.png"
        }
    }
    else if(isOnPage('/pages/articles_pages/cande.html') || isOnPage('/pages/articles_pages/lucas.html')){
        if(body.classList.contains('light')){
            console.log("estas en lucas cande")
            logo.src = "../../img/lightmode/logo-light.png"
            firma.src= "../../img/lightmode/firma_light.png"
            x.src= "../../img/lightmode/X-light.png"
            hamburguer.src= "../../img/lightmode/hamburguer_light.png"
        }
        else{
            logo.src = "../../img/icons/logo.png"
            firma.src= "../../img/icons/firma.png"
            x.src= "../../img/icons/X.png"
            hamburguer.src= "../../img/icons/hamburguer.png"
        }
    }
      
}
    else{
        document.body.classList.remove('light')
        btn_switch.classList.remove('active')
        logo.src = "./img/icons/logo.png"
        firma.src= "./img/icons/firma.png"
        x.src= "./img/icons/X.png"
        hamburguer.src= "./img/icons/hamburguer.png"
    }
    
    //   // guardar modo en local storage
    //   if(document.body.classList.contains('light')){
    //     localStorage.setItem('lightmode', 'true');
    // }
    // else{
    //     localStorage.setItem('lightmode', 'false');
    // }  