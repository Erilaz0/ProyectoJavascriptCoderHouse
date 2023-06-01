// html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado

const escena_title = document.getElementsByClassName("titpad")[0];//titulo de cada producto
const escena = document.getElementsByClassName("productos")[0];//aqui aparecen los productos
const escena_2 = document.getElementsByClassName("carro")[0];//contenedor carrito
const carro_escena = document.getElementsByClassName("carro_logo")[0]; //logo del carrito
const navObtener = document.getElementsByClassName("container-fluid")[0];//nav

// html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado html llamado



// funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos

class producto{

      constructor(foto,nombre,precio,marca,id,cantidad){ 
      this.foto = foto;
      this.nombre = nombre;
      this.precio = precio;
      this.marca = marca;
      this.id = id;
      this.cantidad = cantidad;


}};


// funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos funcion creadora de  productos






function deletesCarrito(){ //con esta funcion eliminamos el carrito

const carritoTotal = document.getElementsByClassName("carrito")[0];
                  let borrarCarro = carritoTotal.parentNode;
                  borrarCarro.removeChild(carritoTotal);



};


// funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado



function deletesCarro(){  //con esta funcion eliminamos los html dentro del carrito
       carroGlobal.innerHTML = "";
       

};


function deletes(){ //funcion para  eliminar productos, esta la usamos para poder cargar otros productos luego
          escena.innerHTML = "";
          escena_title.innerHTML = "";
};


// funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado funciones de borrado










// creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos


function prod_on(prod,tit){  //funcion para cargar los productos
     
     const titulos = document.createElement("h1");// creamos el titulo de cada producto
     titulos.innerHTML = `<h1 class="titulop">${tit}</h1>`;// creamos el titulo de cada producto
     prod.forEach((prod) => { // cargamos los productos
     
       const agregar = document.createElement("div");
       agregar.innerHTML =`
      
     
       <img class="foto" src="${prod.foto}">
       <h6 class="titulo_producto">${prod.nombre}</h6>
       <p class="precio">$${prod.precio}</p>
       <p class="unidad">(Precio por unidad)</p>
       <button class="carroappend" id="${prod.id}" type="submit"></button>
     
     
       `;
     agregar.classList.add("productI");
     escena.appendChild(agregar); // añadimos los productos

     
 })
     
}


// creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos creamos productos



            






//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites


const acces_aceite = document.querySelector(".aceite");
acces_aceite.onmousedown = () =>{
  deletes();
  prod_on(aceites,"Aceites");
};


const aceite1 = new producto("./imagenes/motul5100.jfif","Aceite Motul5100","300","motul","1",1);
const aceite2 = new producto("./imagenes/motul7100.jpg","Aceite Motul3000","400","motul","2",1);
const aceite3 = new producto("./imagenes/motul300v.jpg","Aceite Motul300v","500","motul","3",1);
const aceite4 = new producto("./imagenes/motul3000.webp","Aceite Motul3000","600","motul","4",1);
const aceite5 = new producto("./imagenes/motul510.jfif","Aceite Motul510","700","motul","5",1);
const aceite6 = new producto("./imagenes/motul2000.jfif","Aceite Motul2000","800","motul","6",1);
const aceite7 = new producto("./imagenes/castrol1.jfif","Aceite castrol","800","castrol","7",1);


const aceites = [aceite1,aceite2,aceite3,aceite4,aceite5,aceite6,aceite7];

//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites//aceites











// cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos

const casco1 = new producto("./imagenes/casco1.jfif","casco1","300","yamaha","8",1);
const casco2 = new producto("./imagenes/casco2.jfif","casco2","300","yamaha","9",1);
const casco3 = new producto("./imagenes/casco3.jfif","casco3","300","yamaha","10",1);
const casco4 = new producto("./imagenes/casco4.jfif","casco4","300","yamaha","11",1);
const casco5 = new producto("./imagenes/casco5.jfif","casco5","300","yamaha","12",1);
const casco6 = new producto("./imagenes/casco6.jfif","casco6","300","yamaha","13",1);

const cascos = [casco1,casco2,casco3,casco4,casco5,casco6];
const acces_cascos = document.querySelector(".cascos");
acces_cascos.onmousedown = () =>{ //borramos los productos en pantalla y cargamos los cascos
                deletes();
                prod_on(cascos,"Cascos");


};

// fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio

const titulos = document.createElement("h1");
titulos.innerHTML = `<h1 class="titulop">Cascos</h1>`; 
escena_title.appendChild(titulos);
for (let i = 0; i < cascos.length;i++){

  const agregar = document.createElement("div");
  agregar.innerHTML =`
 

  <img class="foto" src="${cascos[i].foto}">
  <h6 class="titulo_producto">${cascos[i].nombre}</h6>
  <p class="precio">$${cascos[i].precio}</p>
  <p class="unidad">(Precio por unidad)</p>
  <button class="carroappend" id ="${cascos[i].id}" type="submit"></button>


  `;
agregar.classList.add("productI");
escena.appendChild(agregar);

};

// fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio fijamos cascos en el inicio

// cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos cascos








// buscador de aceite motul buscador de aceite motul buscador de aceite motul buscador de aceite motul buscador de aceite motul



const boton = document.querySelector(".search_button");
boton.onmousedown = () =>{
              const search = document.querySelector(".search_bar");
              search_value = search.value;
              if (search_value === "aceite motul" || search_value === "motul"){
              
                deletes();
                const motul = aceites.filter(item=>item.marca === "motul");
                
                for (let i = 0;i < motul.length; i++){
                  const agregar = document.createElement("div");
                  agregar.innerHTML = `
                
                  <img class="foto" src="${motul[i].foto}">
                  <h6 class="titulo_producto">${motul[i].nombre}</h6>
                  <p class="precio">${motul[i].precio}</p>
                  <p class="unidad">(Precio por unidad) </p>
                  <button class="carroappend" id= "${motul[i].id}" type="submit"></button>`
                  
                  agregar.classList.add("productI");
                  escena.appendChild(agregar);

                };
               } ;
              };


              
// buscador de aceite motul final buscador de aceite motul final buscador de aceite motul final buscador de aceite motul final























// baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias baterias



const bateria1 = new producto("./imagenes/bateria1 (42).png","Bateria YTX7A-BS","300","acv","14",1);
const bateria2 = new producto("./imagenes/bateria1 (42).png","Bateria 12N5.5-3B ","300","acv","15",1);
const bateria3 = new producto("./imagenes/bateria1 (42).png","Bateria 12N7B-4B","300","acv","16",1);
const bateria4 = new producto("./imagenes/bateria1 (42).png","Bateria YB2.5L-C","300","acv","17",1);
const bateria5 = new producto("./imagenes/bateria1 (42).png","Bateria 12NTB-4B","300","acv","18",1);
const bateria6 = new producto("./imagenes/bateria1 (42).png","Bateria 12N7-3B","300","acv","19",1);
const bateria7 = new producto("./imagenes/bateria1 (42).png","Bateria YB5L-B","300","acv","20",1);
const bateria8 = new producto("./imagenes/bateria1 (42).png","Bateria YB16CL-B","300","acv","21",1);
const bateria9 = new producto("./imagenes/bateria1 (42).png","Bateria YB9-B","300","acv","22",1);
const bateria10 = new producto("./imagenes/bateria1 (42).png","Bateria ","300","acv","23",1);
const bateria11 = new producto("./imagenes/bateria1 (42).png","Bateria ","300","acv","24",1);
const bateria12 = new producto("./imagenes/bateria1 (42).png","Bateria ","300","acv","25",1);





const baterias = [bateria1,bateria2,bateria3,bateria4,bateria5,bateria6,bateria7,bateria8,bateria9];


const batery = document.querySelector(".baterias");


batery.onmousedown = () =>{//borramos los productos en pantalla y cargamos las baterias
  deletes();
  prod_on(baterias,"Baterias");

};



// baterias final baterias final baterias final baterias final baterias final baterias final baterias final baterias final baterias final
















// creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase





const carroGlobal = document.createElement("div");
             carroGlobal.classList.add("carrito");



const carrito = [];




// creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase creamos el carrito y le añadimos una clase













// BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE






const totalP = [aceites,cascos,baterias];

escena.addEventListener("click", (event) => {
  
  if (event.target.classList.contains("carroappend")) {
    swal.fire("Añadido al Carrito");
    const btn = event.target;
    idT = btn.id; //variable con el id del producto seleccionado
    agregarAlCarrito(idT); //agregamos al local storage y cargamos el producto al carrito si esta en pantalla
  };
});







// BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE FINAL BUSCAR ID DEL CARRITO Y AGREGAR AL LOCALSTORAGE FINAL














 
//  AGREGAR AL LOCALSTORAGE FUNCION  AGREGAR AL LOCALSTORAGE FUNCION  AGREGAR AL LOCALSTORAGE FUNCION  AGREGAR AL LOCALSTORAGE FUNCION






let agregarStorage;
let devolverStorage;
let agregarDesdeLs;

function agregarAlCarrito(id){
  
  let objetoEncontrado;

  
  for(let i = 0 ; i < totalP.length; i++){ 
   
    objetoEncontrado = totalP[i].find(item => item.id === id); //encontramos el producto en el array con toso los productos

    
  
  if (objetoEncontrado) { 
     let buscarObjetoEncontrado = localStorage.getItem(objetoEncontrado.id);
     if (buscarObjetoEncontrado){ //en esta seccion si el producto ya esta en el local storage le sumamos 1+ a la cantidad del mismo
      
      objetoEncontradoDos = JSON.parse(buscarObjetoEncontrado); //  transformamos a objeto
      objetoEncontradoDos.cantidad += 1; //modificamos cantiad del objeto
      
      objetoEncontradoDos.precio = objetoEncontrado.precio; //nos aseguramos que el precio sea el mismo que el valor de 1 solo producto para multiplicarlo por la cantidad
      let pasaraNumero = Number( objetoEncontradoDos.precio); //pasamos el precio a number
      let pasaraNumeroDos = pasaraNumero * objetoEncontradoDos.cantidad; //multiplicamos el precio de un solo producto por la cantidad alterada
      
      objetoEncontradoDos.precio = Object(pasaraNumeroDos); //pasamos de number a object
      
      
      
      localStorage.setItem(objetoEncontrado.id,JSON.stringify(objetoEncontradoDos)); //devolvemos al local storage
      let confirmacionDeCarrito = document.getElementsByClassName("carrito")[0]; //llamamos al carrito
         if(confirmacionDeCarrito){carro_escena.click()}; //si el carrito esta en escena lo recargamos para guardar los cambios cantidad-precio
      
    }
    else{ //en esta seccion añadimos al local storage el producto y si esta el carrito en la pantalla los cargamos ahi
     agregarStorage = JSON.stringify(objetoEncontrado);
     localStorage.setItem(objetoEncontrado.id,agregarStorage);
     devolverStorage = localStorage.getItem(objetoEncontrado.id);
     agregarDesdeLs = JSON.parse(devolverStorage);

     let carritoContainer = document.createElement("div");
             carritoContainer.classList.add("carritocontainer");
             carritoContainer.innerHTML = `
         
             <img class = "foto_carrito" src="${agregarDesdeLs.foto}">
             <button class="botonsito" id = "${agregarDesdeLs.id}" ></button>
             <p class = "cantidad">Cantidad:${agregarDesdeLs.cantidad}</p>
             <h6 class = "nombre_carrito">${agregarDesdeLs.nombre}</h6>
             <p class = "precio_carrito">$${agregarDesdeLs.precio}</p>
             
     
     `

     
     carroGlobal.appendChild(carritoContainer); //añadimos al carro si esta en escena
     
     
     const botonEliminarProducto = carritoContainer.querySelector(".botonsito");
     botonEliminarProducto.addEventListener("click",(event)=>{ //funcion eliminadora de productos individuales
           
      
       
         const btn = event.target;
         idT = btn.id;
         
         

         const desecharProducto = carrito.find(item => item.id === idT);
         let productoADesechar = carrito.indexOf(desecharProducto);
         carrito.splice(productoADesechar,1);
         localStorage.removeItem(idT);
         
         


       
         
       })
       quitarBarraCarrito();
       barraCarrito();
       carro_escena.click();
     
      break;
    }}
    

  };
}


// AGREGAR AL LOCALSTORAGE FUNCION FINAL AGREGAR AL LOCALSTORAGE FUNCION FINAL AGREGAR AL LOCALSTORAGE FUNCION FINAL AGREGAR AL LOCALSTORAGE FUNCION FINAL

















// CARGAR DESDE LOCALSTROAGE A CARRITO CARGAR DESDE LOCALSTROAGE A CARRITO CARGAR DESDE LOCALSTROAGE A CARRITO CARGAR DESDE LOCALSTROAGE A CARRITO



// APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO



carro_escena.addEventListener("click",()=>{ //funcion q se ejecuta al apretar el logo del carrito
            deletesCarro();
            carrito.splice(0,carrito.length); //borramos todo del carrito para evitar duplicaciones inecsesarias al cargarlos en pantalla

            for(let i = 0; i < localStorage.length ;i++){
              let clave = localStorage.key(i);
              let valor = localStorage.getItem(clave);
              let valorObjectBack = JSON.parse(valor);
              carrito.push(valorObjectBack); //añadimos denuevo al carrito

            }



            if(carrito.length > 0){ 
            
             
              
             
             navObtener.appendChild(carroGlobal); //añadimos el contenedor de los productos 
             for(let i = 0; i < carrito.length ;i++){//cargamos los productos
             
             
             
             let carritoContainer = document.createElement("div");
             carritoContainer.classList.add("carritocontainer");
             carritoContainer.classList.add(carrito[i].id);
             carritoContainer.innerHTML = `
         
             <img class = "foto_carrito" src="${carrito[i].foto}">
             <button class="botonsito" id = "${carrito[i].id}" ></button>
             <p class = "cantidad">Cantidad:${carrito[i].cantidad}</p>
             <h6 class = "nombre_carrito">${carrito[i].nombre}</h6>
             <p class = "precio_carrito">$${carrito[i].precio}</p>
             
     
             `   
             carroGlobal.appendChild(carritoContainer);
             
             
             const botonEliminarProducto = carritoContainer.querySelector(".botonsito");// volvemos a aplicar el boton de eliminado individual
             botonEliminarProducto.addEventListener("click",(event)=>{
                   
              
               
                 const btn = event.target;
                 idT = btn.id;
                 
                 

                 const desecharProducto = carrito.find(item => item.id === idT);
                 let productoADesechar = carrito.indexOf(desecharProducto);
                 carrito.splice(productoADesechar,1);
                 localStorage.removeItem(idT);
                 carro_escena.click();
                 if (carrito.length === 0){ //en esta seccion nos aseguramos de que cuando ya no halla productos en el carrito el mismo desaparesca
                  const carritoTotal = document.getElementsByClassName("carrito")[0];
                  let borrarCarro = carritoTotal.parentNode;
                  borrarCarro.removeChild(carritoTotal);


                 };

               
                 
               });
              
              
              
              
              
              
              
              
              
              
              };
              barraCarrito();
               
            
             }}



);


// APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO APARICION DEL CARRO


// CARGAR DESDE LOCALSTROAGE A CARRITO FINAL CARGAR DESDE LOCALSTROAGE A CARRITO FINAL CARGAR DESDE LOCALSTROAGE A CARRITO FINAL



const carritoPrecio = []; //variable contenedora de los precios de cada producto en el carrito


function barraCarrito(){ // creamos la barra de opciones del carrito

  let barraOpcionesCarrito = document.createElement("div"); // barra carrito
  barraOpcionesCarrito.classList.add("barra_opciones_carrito");
  carroGlobal.appendChild(barraOpcionesCarrito);// final barra carrito
  let comprar = document.createElement("button");
  comprar.classList.add("confirmar_compra");
  barraOpcionesCarrito.appendChild(comprar); //agregamos el boton de confirmar la compra
  
  comprar.addEventListener("click",()=>{ //añadimos el aviso de que se confirmo la compra
    swal.fire("Compra confirmada");
    localStorage.clear();
    carrito.splice(0);
    carritoPrecio.splice(0);
    carro_escena.click();
    deletesCarrito();


  })



  let vaciarCarrito = document.createElement("button");// creamos el boton de vaciar carrito
  vaciarCarrito.classList.add("vaciar_carrito");
  vaciarCarrito.addEventListener("click",()=>{ //creamos la funcionalidad del boton de vaciar carrito

    localStorage.clear(); //funcionalidad - a
    carrito.splice(0); //funcionalidad - b
    carritoPrecio.splice(0); //funcionalidad - c
    carro_escena.click(); //funcionalidad - d
    deletesCarrito(); //funcionalidad - e





  })
  barraOpcionesCarrito.appendChild(vaciarCarrito); // añadimos a la barra de opciones el boton de vaciar carrito


  let botonDeSalir = document.createElement("button");//boton de salir
  botonDeSalir.classList.add("boton_de_salir");
  barraOpcionesCarrito.appendChild(botonDeSalir);
  botonDeSalir.addEventListener("click",()=>{ // le agregamos su funcionalidad al boton de salir del carrito
  const carritoTotal = document.getElementsByClassName("carrito")[0];
  let borrarCarro = carritoTotal.parentNode;
  borrarCarro.removeChild(carritoTotal);//final boton de salir
  
  
})

 for(let i = 0 ; i < carrito.length ; i++){ //convertimos a numeros todos los precios del carrito q estan en string y los mandamos a carritoPrecio q es donde tenemos todos los precios

  let carritoPrecios = carrito[i].precio;
  carritoPrecioNumericos = Number(carritoPrecios);
  carritoPrecio.push(carritoPrecioNumericos);
  


 };

 
 let sumaT = 0;


for( let i = 0 ; i < carritoPrecio.length ; i++){

     
     sumaT += carritoPrecio[i];
     


  };




  let precioConjuntoA = document.createElement("div"); //creamos la seccion donde aparecera el precio total de los productos
  precioConjuntoA.classList.add("precioconjuntodiv");
  precioConjuntoA.innerHTML = `<p class = "preciototal">Total:$${sumaT}</p>`
  barraOpcionesCarrito.appendChild(precioConjuntoA); //añadimos el espacio donde aparecera el precio total de los productos
  carritoPrecio.splice(0); //borramos todo de la variable que contiene los precios para evitar errores de acumulacion de precios inescesarios 


 }
 function quitarBarraCarrito(){ // creamos la funcion que elimina la barra de opciones del carrito, esto evitara que quede en otro lado q no sea abajo del todo
         
         let quitarOpcionesDelCarrito = document.getElementsByClassName("barra_opciones_carrito")[0];
         let quitarOpcionesDelCarritoDos = quitarOpcionesDelCarrito.parentNode;
         quitarOpcionesDelCarritoDos.removeChild(quitarOpcionesDelCarrito);


 };

















 fetch("../json/titulos.json") // cargamos el titulo de la seccion de productos asociados
  .then(response => response.json())
  .then(data => {
    // Obtener el título del JSON
    const tituloAsociaciones = data.titulo;

    // Asignar el título al elemento HTML deseado
    const tituloElement = document.getElementsByClassName("asociacion_title")[0]
    tituloElement.textContent = tituloAsociaciones;
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error al cargar el archivo json:', error);
  });
      









  /////////////////////////////////////////////////////////////////////////