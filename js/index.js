// funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos

class producto{

      constructor(foto,nombre,precio,marca,id){ 
      this.foto = foto
      this.nombre = nombre
      this.precio = precio
      this.marca = marca
      this.id = id


}}


// funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos











// html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado


const escena_title = document.getElementsByClassName("titpad")[0]
const escena = document.getElementsByClassName("productos")[0]
const escena_2 = document.getElementsByClassName("carro")[0]
const carro_escena = document.getElementsByClassName("carro_logo")[0]
const navObtener = document.getElementsByClassName("container-fluid")[0]


// html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado










// funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado



function deletesCarro(){
       carroGlobal.innerHTML = ""
       

}


function deletes(){
          escena.innerHTML = ""
          escena_title.innerHTML = ""
}


// funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado










// creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos


function prod_on(prod,tit){  
     
     const titulos = document.createElement("h1")
     titulos.innerHTML = `<h1 class="titulop">${tit}</h1>`//AVERIGUAR COMO HACER PARA QUE QUEDE ARRIBA ESTO ACA HICIMOS NOMBRE DE LA SECCION LE AGREGAMOS UN PARAMETRO MAS PARA PODER GREGARLE EL NOMBRE TAMBIEN
     escena_title.appendChild(titulos)
     prod.forEach((prod) => {
     
       const agregar = document.createElement("div")
       agregar.innerHTML =`
      
     
       <img class="foto" src="${prod.foto}">
       <h6 class="titulo_producto">${prod.nombre}</h6>
       <p class="precio">${prod.precio}</p>
       <p class="unidad">(Precio por unidad)</p>
       <button class="carroappend" id="${prod.id}" type="submit"></button>
     
     
       `
     agregar.classList.add("productI")
     escena.appendChild(agregar)

     
 })
     
}


// creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos



            






//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites


const acces_aceite = document.querySelector(".aceite")
acces_aceite.onmousedown = () =>{
  deletes()
  prod_on(aceites,"Aceites")
}


const aceite1 = new producto("./imagenes/motul5100.jfif","Aceite Motul5100","$300","motul","1")
const aceite2 = new producto("./imagenes/motul7100.jpg","Aceite Motul3000","$400","motul","2")
const aceite3 = new producto("./imagenes/motul300v.jpg","Aceite Motul300v","$500","motul","3")
const aceite4 = new producto("./imagenes/motul3000.webp","Aceite Motul3000","$600","motul","4")
const aceite5 = new producto("./imagenes/motul510.jfif","Aceite Motul510","$700","motul","5")
const aceite6 = new producto("./imagenes/motul2000.jfif","Aceite Motul2000","$800","motul","6")
const aceite7 = new producto("./imagenes/castrol1.jfif","Aceite castrol","$800","castrol","7")


const aceites = [aceite1,aceite2,aceite3,aceite4,aceite5,aceite6,aceite7]

//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites











// cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos

const casco1 = new producto("./imagenes/casco1.jfif","casco1","$300","yamaha","8")
const casco2 = new producto("./imagenes/casco2.jfif","casco2","$300","yamaha","9")
const casco3 = new producto("./imagenes/casco3.jfif","casco3","$300","yamaha","10")
const casco4 = new producto("./imagenes/casco4.jfif","casco4","$300","yamaha","11")
const casco5 = new producto("./imagenes/casco5.jfif","casco5","$300","yamaha","12")
const casco6 = new producto("./imagenes/casco6.jfif","casco6","$300","yamaha","13")

const cascos = [casco1,casco2,casco3,casco4,casco5,casco6]
const acces_cascos = document.querySelector(".cascos")
acces_cascos.onmousedown = () =>{
                deletes()
                prod_on(cascos,"Cascos")


}

// fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio

const titulos = document.createElement("h1")
titulos.innerHTML = `<h1 class="titulop">Cascos</h1>`//BUSCAR COMO HACER PARA QUE QUEDE ARRIBA ESTO ACA HICIMOS NOMBRE DE LA SECCION LE AGREGAMOS UN PARAMETRO MAS PARA PODER GREGARLE EL NOMBRE TAMBIEN
escena_title.appendChild(titulos)
for (let i = 0; i < cascos.length;i++){

  const agregar = document.createElement("div")
  agregar.innerHTML =`
 

  <img class="foto" src="${cascos[i].foto}">
  <h6 class="titulo_producto">${cascos[i].nombre}</h6>
  <p class="precio">${cascos[i].precio}</p>
  <p class="unidad">(Precio por unidad)</p>
  <button class="carroappend" id ="${cascos[i].id}" type="submit"></button>


  `
agregar.classList.add("productI")
escena.appendChild(agregar)

}

// fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio

// cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos








// buscador de aceite motul buscador de aceite motul buscador de aceite motul buscador de aceite motul buscador de aceite motul



const boton = document.querySelector(".search_button")
boton.onmousedown = () =>{
              const search = document.querySelector(".search_bar")
              search_value = search.value
              if (search_value === "aceite motul" || search_value === "motul"){
              
                deletes()
                const motul = aceites.filter(item=>item.marca === "motul")
                
                for (let i = 0;i < motul.length; i++){
                  const agregar = document.createElement("div")
                  agregar.innerHTML = `
                
                  <img class="foto" src="${motul[i].foto}">
                  <h6 class="titulo_producto">${motul[i].nombre}</h6>
                  <p class="precio">${motul[i].precio}</p>
                  <p class="unidad">(Precio por unidad) </p>
                  <button class="carroappend" id= "${motul[i].id}" type="submit"></button>`
                  
                  agregar.classList.add("productI")
                  escena.appendChild(agregar)

                }
               } 
              }


              
// buscador de aceite motul final buscador de aceite motul final buscador de aceite motul final buscador de aceite motul final























// baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias



const bateria1 = new producto("./imagenes/bateria1 (42).png","Bateria YTX7A-BS","0$","acv","14")
const bateria2 = new producto("./imagenes/bateria1 (42).png","Bateria 12N5.5-3B ","0$","acv","15")
const bateria3 = new producto("./imagenes/bateria1 (42).png","Bateria 12N7B-4B","0$","acv","16")
const bateria4 = new producto("./imagenes/bateria1 (42).png","Bateria YB2.5L-C","0$","acv","17")
const bateria5 = new producto("./imagenes/bateria1 (42).png","Bateria 12NTB-4B","0$","acv","18")
const bateria6 = new producto("./imagenes/bateria1 (42).png","Bateria 12N7-3B","0$","acv","19")
const bateria7 = new producto("./imagenes/bateria1 (42).png","Bateria YB5L-B","0$","acv","20")
const bateria8 = new producto("./imagenes/bateria1 (42).png","Bateria YB16CL-B","0$","acv","21")
const bateria9 = new producto("./imagenes/bateria1 (42).png","Bateria YB9-B","0$","acv","22")
const bateria10 = new producto("./imagenes/bateria1 (42).png","Bateria ","0$","acv","23")
const bateria11 = new producto("./imagenes/bateria1 (42).png","Bateria ","0$","acv","24")
const bateria12 = new producto("./imagenes/bateria1 (42).png","Bateria ","0$","acv","25")





const baterias = [bateria1,bateria2,bateria3,bateria4,bateria5,bateria6,bateria7,bateria8,bateria9]


const batery = document.querySelector(".baterias")


batery.onmousedown = () =>{
  deletes()
  prod_on(baterias,"Baterias")

}



// baterias final baterias final baterias final baterias final baterias final baterias final baterias final baterias final baterias final
















// creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase





const carroGlobal = document.createElement("div")
             carroGlobal.classList.add("carrito")



const carrito = []




// creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase













// BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE






const totalP = [aceites,cascos,baterias]

escena.addEventListener("click", (event) => {
 
  if (event.target.classList.contains("carroappend")) {
    const btn = event.target;
    idT = btn.id
    agregarAlCarrito(idT)
  }
});







// BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE FINAL BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE FINAL














 
//  AGREGAR AL LOCALSTORAGE FUNCION  AGREGAR AL LOCALSTORAGE FUNCION  AGREGAR AL LOCALSTORAGE FUNCION  AGREGAR AL LOCALSTORAGE FUNCION






let agregarStorage
let devolverStorage
let agregarDesdeLs

function agregarAlCarrito(id){
  
  let objetoEncontrado;

  
  for(let i = 0 ; i < totalP.length; i++){ 
   
    objetoEncontrado = totalP[i].find(item => item.id === id);
    
  
  if (objetoEncontrado) {
     
     agregarStorage = JSON.stringify(objetoEncontrado)
     localStorage.setItem(objetoEncontrado.id,agregarStorage)
     devolverStorage = localStorage.getItem(objetoEncontrado.id)
     agregarDesdeLs = JSON.parse(devolverStorage)

     let carritoContainer = document.createElement("div")
             carritoContainer.classList.add("carritocontainer")
             carritoContainer.innerHTML = `
         
             <img class = "foto_carrito" src="${agregarDesdeLs.foto}">
             
             <h6 class = "nombre_carrito">${agregarDesdeLs.nombre}</h6>
             <p class = "precio_carrito">${agregarDesdeLs.precio}</p>
             
     
     `

     
     carroGlobal.appendChild(carritoContainer)
     
     
      break;
    }
    

  };
}


// AGREGAR AL LOCALSTORAGE FUNCION FINAL AGREGAR AL LOCALSTORAGE FUNCION FINAL AGREGAR AL LOCALSTORAGE FUNCION FINAL AGREGAR AL LOCALSTORAGE FUNCION FINAL

















// CARGAR DESDE LOCALSTROAGE A CARRITO CARGAR DESDE LOCALSTROAGE A CARRITO CARGAR DESDE LOCALSTROAGE A CARRITO CARGAR DESDE LOCALSTROAGE A CARRITO



// APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO



carro_escena.addEventListener("click",()=>{
            deletesCarro()
            carrito.splice(0,carrito.length)

            for(let i = 0; i < localStorage.length ;i++){
              let clave = localStorage.key(i)
              let valor = localStorage.getItem(clave)
              let valorObjectBack = JSON.parse(valor)
              carrito.push(valorObjectBack)

            }



            if(carrito.length > 0){ 
            
             
              
             
             navObtener.appendChild(carroGlobal)
             for(let i = 0; i < carrito.length ;i++){
             
             
             
             let carritoContainer = document.createElement("div")
             carritoContainer.classList.add("carritocontainer")
             carritoContainer.innerHTML = `
         
             <img class = "foto_carrito" src="${carrito[i].foto}">
             
             <h6 class = "nombre_carrito">${carrito[i].nombre}</h6>
             <p class = "precio_carrito">${carrito[i].precio}</p>
             
     
             `   
             carroGlobal.appendChild(carritoContainer)
             }
     
            
             }}



)


// APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO


// CARGAR DESDE LOCALSTROAGE A CARRITO FINAL CARGAR DESDE LOCALSTROAGE A CARRITO FINAL CARGAR DESDE LOCALSTROAGE A CARRITO FINAL

