function revelarInput(){
    var inOutro= document.getElementById("inOutro").style.visibility  = "visible";
    var lbOutro= document.getElementById("lbOutro").style.visibility  = "visible";
}
function esconderInput(){
    var inOutro= document.getElementById("inOutro").style.visibility  = "hidden";
    var lbOutro= document.getElementById("lbOutro").style.visibility  = "hidden";
}
function cadastroDados(){
    alert("ok")
    let inNome= document.getElementById("inNome").value
    let inIdade= document.getElementById("inIdade").value
    let radMas= document.getElementById("radMas")
    let radFem= document.getElementById("radFem")
    let inEstado= document.getElementById("inEstado").value
    let radBrasil= document.getElementById("radBrasil")
    let radOutro= document.getElementById("radOutro")
    let inOutro= document.getElementById("inOutro").value
    let outDados= document.getElementById("outDados")

    const ideal= {
        idade: function(idade,mas){
            if(mas == true){
                if(idade >= 20){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                if(idade >= 18){
                    return true
                }
                else{
                    return false
                }
            }
        },
        naturalidade: function(brasil, outro){
            let paises= {Chile: "", Argentina: "", Uruguai:""}
            if(radBrasil == true){
                return true
            }
            else{
                if(outro in paises == true){
                    return true
                }
                else{
                    return false
                }
            }
        }
         

    }
    if(ideal.idade(inIdade, radMas) == true || ideal.naturalidade(radBrasil, inOutro) == true){
        outDados.innerHTML= `<h2> Seu cadrasto foi um sucesso!! </h2> <br> Nome: ${inNome} <br> Idade: ${inIdade} <br> Estado Social: ${inEstado}`
    }
    else{
        outDados.innerHTML= `<h2> Seu cadastro foi negado !! </h2> `
    }
}
    