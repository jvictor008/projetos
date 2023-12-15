function porcentagem(){
    let total= document.getElementById("total").value
    let ranger= document.getElementById("range").value
    let porcentagem= document.getElementById("porcentagem")
    let numTip= document.getElementById("numTip")
    let numFinal= document.getElementById("numFinal")
    let final= document.getElementById("final")
    let tip= document.getElementById("tip")

    porcentagem.innerHTML= ranger + "%"

    numTip.value= total * (ranger/100)
    
    total= Number(total)
    ranger= Number(ranger)

    numFinal.value= total + (total * (ranger/100))

    tip.style.display="inline-block"
    final.style.display = "inline-block"
}
function load(){
    let total= document.getElementById("total")
    let ranger= document.getElementById("range")
    total.value= undefined
    ranger.value = 0
}