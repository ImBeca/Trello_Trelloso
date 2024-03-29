
let abrirEdi = document.getElementById("addQuadro");

abrirEdi.addEventListener("click", function (event) {

    document.getElementById("ediQuadros").style.display = "inline";
    
})

let propagation = document.getElementById("divQuadros");
propagation.addEventListener("click", function (event) {
    event.stopPropagation();
    
})


let coleta = document.getElementById("criarQuadro");

 coleta.addEventListener("submit", function(event){
    event.preventDefault();

    let escNome  = document.getElementById("Qnome");
    let cores  = document.getElementById("opcoes");

    let data = {
        "name": escNome.value,
        "color": cores.value,
        "favorito": false
      }

      
       enviarboard(data);
      


      this.reset();

      document.getElementById("ediQuadros").style.display = "none";



})


let montarQuadros = async function () {
    let  dados = await  Listarboard();
    let EspQuadros = document.getElementById("quadros");
    let EspF = document.getElementById("quadrosf");

    EspQuadros.innerHTML= "";
    EspF.innerHTML= "";


    for(let elemento in dados){


        let h3 = document.createElement("h3");
        h3.classList.add("Qnome");
        h3.innerHTML = dados[elemento].name;
        let img = document.createElement("img");
        img.classList.add("estrela");
        img.src ="icones/star-regular.svg";
        img.alt = "icone favorito";

        let div = document.createElement("div");
        div.id = dados[elemento].id;
        div.classList.add("quadro");
        div.appendChild(h3);
        div.appendChild(img);
        div.style.backgroundColor = dados[elemento].color;

        EspQuadros.appendChild(div);



        if(elemento.favorito == "true"){

            EspF.appendChild(div);
        }
        
        
    };
}

let desmontarQuadros = function (){

    let EspQuadros = document.getElementById("quadros");
    let EspF = document.getElementById("quadrosf");

    EspQuadros.innerHTML= "";
    EspF.innerHTML= "";
}

// metodo para cadastrar quadros
let enviarboard = async function (data) {
    let token = localStorage.getItem("token");
    try {
  
      // const response = await fetch("http://192.168.90.220:8087/api/v1/boards", {
  
       const response = await fetch("http://localhost:8087/api/v1/boards", {
  
        method: "POST", // or 'PUT'
  
        headers: {
            'Authorization': token,
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify(data),
  
      });
  
      if(response.status == 200){

          
        const result = await response.json();
        
        console.log("Envio bem sucedido", result);

        montarQuadros();
      }

    if(response.status == 422){

      alert("ocorreu algum erro")
      localStorage.removeItem("token");
      location.reload();

    }
  
    } catch (error) {
      
      console.error("Error:", error);
    }
  }

  // metodo que retorna a lista de quadros
let Listarboard = async function () {
    let token = localStorage.getItem("token");
    try {
  
      // const response = await fetch("http://192.168.90.220:8087/api/v1/users/me/boards", {
  
       const response = await fetch("http://localhost:8087/api/v1/users/me/boards", {
  
        method: "GET",
  
        headers: {
            'Authorization': token,
          "Content-Type": "application/json",
        },
  
  
      });
      if(response.status == 200){

          
          const result = await response.json();
          
          console.log("Envio bem sucedido", result);

          return result;
        }

      if(response.status == 422){

        alert("ocorreu algum erro")
        localStorage.removeItem("token")
        location.reload();

      }
      
      return "alguma coisa";
    } catch (error) {
      
      console.error("Error:", error);
    }
  }
export default {abrirEdi, montarQuadros, coleta,  desmontarQuadros};