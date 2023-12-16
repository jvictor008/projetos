function setenceCase(){
    var inTexto= document.getElementById("inTexto")
    var lista= []
    
    inTexto.value= inTexto.value.toLowerCase()
    for(i= 0; i <= inTexto.value.length; i++){
        if(i == 0){
            lista[0]= inTexto.value[0].toUpperCase()
        }
        else{
            lista.push(inTexto.value[i])
        }
    }
    inTexto.value=lista.join("")
}
function lowerCase(){
    var inTexto= document.getElementById('inTexto')
    inTexto.value.toLowerCase()
    inTexto.value= inTexto.value.toLowerCase()
}

function upperCase(){
    var inTexto= document.getElementById('inTexto')
    inTexto.value.toLowerCase()
    inTexto.value= inTexto.value.toUpperCase()
}
function CapitalizedCase(){
    var inTexto= document.getElementById("inTexto")
    var lista= []
    inTexto.value= inTexto.value.toLowerCase()
    for(i= 0; i <= inTexto.value.length; i++){
        if(inTexto.value[i-1] == " "){
            lista[i]= inTexto.value[i].toUpperCase()

        }
        else{
            lista.push(inTexto.value[i])
        }
        if(i == 0){
            lista[0]= inTexto.value[0].toUpperCase()
        }
    }
    inTexto.value=lista.join("")
}
function aleternatingCase(){
    var inTexto= document.getElementById("inTexto")
    var lista= []
    inTexto.value= inTexto.value.toLowerCase()
    for(i= 0; i <= inTexto.value.length; i++){
        if(i % 2 != 0){
           lista.push(inTexto.value[i].toUpperCase())
        }
        else{
            lista.push(inTexto.value[i])
        }
    }
    inTexto.value=lista.join("")
}
function inverseCase(){
    var inTexto= document.getElementById("inTexto")
    var lista= []
    inTexto.value= inTexto.value.toLowerCase()
    for(i= 0; i <= inTexto.value.length; i++){
       lista.unshift(inTexto.value[i])
    }
    inTexto.value=lista.join("")
}
function copyCase(){
    let inTexto= document.getElementById("inTexto").value
    navigator.clipboard.writeText(inTexto).then(() => {
        alert('Texto copiado')
    })
  }
function clearCase(){
    var inTexto= document.getElementById("inTexto")
    inTexto.value= ""
}
function outDados(){
    var inTexto= document.getElementById("inTexto")
    var outDados= document.getElementById('outDados')
    var carac= 0
    var palavras= 0
    var frases= 1
    for(i= 0; i <= inTexto.value.length; i++){
        carac+= 1
        if(inTexto.value[i] == " "){
            palavras+= 1
        }
        if(inTexto.value[i] == "."){
            frases+= 1
        }
    }
    outDados.innerHTML=`Caracteres= ${carac} <br>Palavras= ${palavras}<br>Frases= ${frases}`
}

