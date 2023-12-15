let lista= []   
function adicionarTarefa(){
    let inTarefa= document.getElementById("inTarefa")
    let outLista= document.getElementById("outLista")

    let tarefa= inTarefa.value

   

    lista.push(tarefa)
  
    inTarefa.value = ""
    
    let resposta = ""

    for(i = 0; i < lista.length; i++){
        resposta= resposta + `<li> <input type="checkbox" id= "${i}">${lista[i]}  <button onclick="apagarTarefa()>X</button></li>  <br> `
        
    }
    outLista.innerHTML= `${resposta}`
    
}

function apagarTarefa(){
    
}