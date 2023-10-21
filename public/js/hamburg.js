const hamburguer = document.querySelector('#hamburguer')
const nav = document.querySelector('#nav')
const x = document.querySelector('#x')

hamburguer.addEventListener('click',()=> {
    hamburguer.style.display= 'none';
    nav.classList.add('visible')
});

x.addEventListener('click',()=>{
    nav.classList.remove('visible');
    hamburguer.style.display= 'block';

})

// // Lightmode
// const btn_lightmode = document.querySelector('.btn_lightmode');
// const body = document.querySelector('#body');

// btn_lightmode.addEventListener('click',()=>{
//     console.log("click")
//     body.classList.add('lightmode');
// } )

