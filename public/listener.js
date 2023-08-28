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