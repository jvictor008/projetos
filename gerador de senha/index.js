function mostrarCarac(){
    let inCarac= document.getElementById("inCarac").value
    let outCarac= document.getElementById("outCarac")

    outCarac.innerHTML= inCarac + " Caracteres"
}

function gerarSenha(){
    let inCarac= document.getElementById("inCarac").value
    let outSenha= document.getElementById("outSenha")
    let btCopiar= document.getElementById("btCopiar").style.display= 'block';
    
    let minusculas= "qwertyuiopasdfghjklçzxcvbn"
    let maiusculas= minusculas.toLocaleUpperCase()
    let str= maiusculas + minusculas
    let num= "1234567890"
    let total= str + num
    let senha=[]
    let min= Math.min(0)
    let max= Math.max(61)
    do{
        senha.push(total[Math.round(Math.random() * (max - min + 1) + min)])
    }
    while(senha.length <= inCarac - 1)
    
    outSenha.value= senha.join("") 
    outSenha.innerHTML= senha.join("")
}

function copiarTexto() {
    let outSenha= document.getElementById("outSenha").value
    let outCopia= document.getElementById("outCopia")
    navigator.clipboard.writeText(outSenha).then(() => {
        outCopia.innerHTML='Texto copiado'
    })
  }

function esconderTexto(){
    let outCopia= document.getElementById("outCopia").style.visibility = "hidden"
    outCopia.innerHTML='Texto copiado'
}
setTimeout(esconderTexto, 3000);