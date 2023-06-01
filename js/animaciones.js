const fotoInicial = document.getElementsByClassName("tituloInicial")[0]

setTimeout (()=>{
     let pionerosTitle = document.createElement("h1")
     pionerosTitle.classList.add("pioneros_title")
     pionerosTitle.innerText += `Pioneros en Repuestos usados desde 1997`
     fotoInicial.appendChild(pionerosTitle)
              




},1000)

const divFotosIniciales = document.getElementsByClassName("fotosIniciales")[0]


setTimeout(()=>{
      divFotosIniciales.innerHTML += `
     <img class = "fotos_inicial fotos_inicial1" src = "./imagenes/guardabarrosv.jpg">
     <img class = "fotos_inicial fotos_inicial2" src = "./imagenes/cascov.jfif">
     <img class = "fotos_inicial fotos_inicial3" src = "./imagenes/manillarv.jpg">
     <img class = "fotos_inicial fotos_inicial4" src = "./imagenes/cubremanillares.jpg">                               `
},1000)

























































