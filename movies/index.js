let movies= []

function adicionarMovie(){
    let inNome= document.querySelector("#inNome").value
    let inUrl = document.querySelector("#inUrl").value
    let inRange= document.querySelector("#inRange").value
    let outRange= document.querySelector("#outRange")
    let outMovie= document.querySelector("#outMovie")
    movies.push( {
        nome: inNome,
        inUrl: inUrl,
        classifiacao: inRange
        })
    let copia= movies.slice( movies.length-1)
    console.log(copia)
    outMovie.style.visibility= "visible"

    for(i = 0; i < copia.length; i++){
        outMovie.insertAdjacentHTML("beforeend", `<img src="${copia[i].inUrl}"> <h3> ${copia[i].nome} </h3> <p> &#11088; ${copia[i].classifiacao}/10 `)
        
    }
    
}

function mostrarRanger(){
    let inRange= document.querySelector("#inRange").value
    let outRange= document.querySelector("#outRange")
    outRange.innerHTML= `${inRange}/10`
}