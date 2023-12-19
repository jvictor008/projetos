function adicionarMovie(){
    let inNome= document.querySelector("#inNome").value
    let inUrl = document.querySelector("#inUrl").value
    let inRange= document.querySelector("#inRange").value
    let outRange= document.querySelector("#outRange")
    let outMovie= document.querySelector("#outMovie")
    let movies= {
       nome: inNome,
       inUrl: inUrl,
       classifiacao: inRange
    }
    
    outMovie.innerHTML= `<img src="${movies.inUrl}"> <br> <h2>${inNome} &#11088; ${movies.classifiacao}/10</h2> `
}

function mostrarRanger(){
    let inRange= document.querySelector("#inRange").value
    let outRange= document.querySelector("#outRange")
    outRange.innerHTML= `${inRange}/10`
}