


var elementoAnimado = document.getElementsByClassName("surtidor")[0]

function activarAnimacion() {
  var posicionElemento = elementoAnimado.getBoundingClientRect().top;
  var posicionVentana = window.innerHeight || document.documentElement.clientHeight;
  
  if (posicionElemento < posicionVentana) {
    elementoAnimado.style.animationPlayState = "running";
  }
}

window.addEventListener("scroll", activarAnimacion);





// animaciones pagina intermedia animaciones pagina intermedia animaciones pagina intermedia animaciones pagina intermedia animaciones pagina intermedia



const logos = document.querySelectorAll('.fade');

let delay = 0;

logos.forEach((logo) => {
  setTimeout(() => {
    logo.classList.add('show');
  }, delay);

  delay += 100;
});

let element
let pocisionAct
let pocisionNav
function opaty(element){

  element = document.querySelector(element)
  pocisionAct = element.getBoundingClientRect().top
  pocisionNav = window.innerHeight

  if (pocisionAct < pocisionNav){
    
    element.style.animationPlayState = "running";
  }

   

}

window.addEventListener("scroll",function(){opaty(".foto-1")})
window.addEventListener("scroll",function(){opaty(".foto-2")})
window.addEventListener("scroll",function(){opaty(".foto-3")})


let elemento_pioneros
let ub_elemento_pioneros
let ubtop_elemento_pioneros

function op(elem){
   elemento_pioneros = document.querySelector(elem)
   ub_elemento_pioneros = elemento_pioneros.getBoundingClientRect().top;
   ubtop_elemento_pioneros = window.innerHeight

   if (ub_elemento_pioneros < ubtop_elemento_pioneros){

        elemento_pioneros.style.animationPlayState = "running"

   }

}
window.addEventListener("scroll",function(){op(".pioneros")})







// animacion pagina intermedia final animacion pagina intermedia final animacion pagina intermedia final animacion pagina intermedia final


