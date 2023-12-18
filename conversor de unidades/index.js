let inNumero = document.getElementById("inNumero")
let outNumero= document.getElementById("outNumero")
let outConversao= document.getElementById("outConversao")



let outMetro= document.getElementById("outMetro")
let outQui= document.getElementById("outQui")
let outCent= document.getElementById("outCent")
let outMili= document.getElementById("outMili")
let outMicro= document.getElementById("outMicro")
let outNano= document.getElementById("outNano")
let outMilha= document.getElementById("outMilha")
let outJarda= document.getElementById("outJarda")
let outPe= document.getElementById("outPe")
let outPolegada= document.getElementById("outPolegada")
let outAno= document.getElementById("outAno")

function calMetro(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num})`
    outQui.innerHTML= `(${num *0.001})`
    outCent.innerHTML= `(${num * 100})`
    outMili.innerHTML= `(${num * 1000})`
    outMicro.innerHTML= `(${num * 1e+6 })`
    outNano.innerHTML= `(${num * 1e+9})`
    outMilha.innerHTML= `(${num * 0.000621371})`
    outJarda.innerHTML= `(${num * 1.09361296})`
    outPe.innerHTML= `(${num * 3.2808388799999997})`
    outPolegada.innerHTML= `(${num * 39.370066559999997935})`
    outAno.innerHTML= `(${num * 1.057e-16})`
}

function calQui(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 1000})`
    outQui.innerHTML= `(${num *1})`
    outCent.innerHTML= `(${num * 100000})`
    outMili.innerHTML= `(${num * 1e+6})`
    outMicro.innerHTML= `(${num * 1e+9 })`
    outNano.innerHTML= `(${num * 1e+12})`
    outMilha.innerHTML= `(${num * 0.621371})`
    outJarda.innerHTML= `(${num * 1093.612959995625})`
    outPe.innerHTML= `(${num * 3280.838879986874872})`
    outPolegada.innerHTML= `(${num * 39370.066559842496645})`
    outAno.innerHTML= `(${num * 1.057e-13})`
}
function calCent(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 0.01})`
    outQui.innerHTML= `(${num *1e-5})`
    outCent.innerHTML= `(${num * 1})`
    outMili.innerHTML= `(${num * 10})`
    outMicro.innerHTML= `(${num * 10000 })`
    outNano.innerHTML= `(${num * 1e+7})`
    outMilha.innerHTML= `(${num * 6.2137e-6})`
    outJarda.innerHTML= `(${num * 0.010936111996938})`
    outPe.innerHTML= `(${num * 0.03280833599081400126})`
    outPolegada.innerHTML= `(${num * 0.39370003188976804287})`
    outAno.innerHTML= `(${num * 1.057e-18})`
}
function calMili(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 0.001})`
    outQui.innerHTML= `(${num *1e-6})`
    outCent.innerHTML= `(${num * 0.1})`
    outMili.innerHTML= `(${num * 1})`
    outMicro.innerHTML= `(${num * 1000 })`
    outNano.innerHTML= `(${num * 1e+6})`
    outMilha.innerHTML= `(${num * 6.2137e-7})`
    outJarda.innerHTML= `(${num * 0.0010936111996938})`
    outPe.innerHTML= `(${num * 0.0032808335990813998657})`
    outPolegada.innerHTML= `(${num * 0.0393701})`
    outAno.innerHTML= `(${num * 1.057e-19})`
}
function calMicro(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 1e-6})`
    outQui.innerHTML= `(${num *1e-6})`
    outCent.innerHTML= `(${num * 1e-4})`
    outMili.innerHTML= `(${num * 0.001})`
    outMicro.innerHTML= `(${num * 1 })`
    outNano.innerHTML= `(${num * 1000})`
    outMilha.innerHTML= `(${num * 6.2137e-10})`
    outJarda.innerHTML= `(${num * 1.093611199694e-6})`
    outPe.innerHTML= `(${num * 3.280833599081999999e-6})`
    outPolegada.innerHTML= `(${num * 3.937e-5})`
    outAno.innerHTML= `(${num * 1.057e-22})`
}
function calNano(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 1e-9})`
    outQui.innerHTML= `(${num *1e-12})`
    outCent.innerHTML= `(${num * 1e-7})`
    outMili.innerHTML= `(${num * 1e-6})`
    outMicro.innerHTML= `(${num * 0.001 })`
    outNano.innerHTML= `(${num * 1})`
    outMilha.innerHTML= `(${num *6.2137e-13})`
    outJarda.innerHTML= `(${num * 1.093611199694e-9})`
    outPe.innerHTML= `(${num * 3.280833599081999549e-9})`
    outPolegada.innerHTML= `(${num * 3.937000318898399459e-8})`
    outAno.innerHTML= `(${num * 1.057e-25})`
}
function calMilha(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 1609.34})`
    outQui.innerHTML= `(${num *1.60934})`
    outCent.innerHTML= `(${num * 160934})`
    outMili.innerHTML= `(${num * 1609340.0007802})`
    outMicro.innerHTML= `(${num * 1.609e+9 })`
    outNano.innerHTML= `(${num * 1.609e+12})`
    outMilha.innerHTML= `(${num * 1})`
    outJarda.innerHTML= `(${num * 1760})`
    outPe.innerHTML= `(${num * 5280})`
    outPolegada.innerHTML= `(${num * 63360})`
    outAno.innerHTML= `(${num * 1.7011e-13})`
}
function calJarda(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 0.9144})`
    outQui.innerHTML= `(${num *0.0009144})`
    outCent.innerHTML= `(${num * 91.44})`
    outMili.innerHTML= `(${num * 914.4})`
    outMicro.innerHTML= `(${num * 914400 })`
    outNano.innerHTML= `(${num * 9.144e+8})`
    outMilha.innerHTML= `(${num * 0.000568182})`
    outJarda.innerHTML= `(${num * 1})`
    outPe.innerHTML= `(${num * 3.00000096})`
    outPolegada.innerHTML= `(${num * 36.00001152})`
    outAno.innerHTML= `(${num * 9.6652e-17})`
}
function calPe(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 0.3048})`
    outQui.innerHTML= `(${num * 0.0003048})`
    outCent.innerHTML= `(${num * 30.48})`
    outMili.innerHTML= `(${num * 304.8})`
    outMicro.innerHTML= `(${num * 304800 })`
    outNano.innerHTML= `(${num * 3.048e+8})`
    outMilha.innerHTML= `(${num * 0.000189394})`
    outJarda.innerHTML= `(${num * 0.333333})`
    outPe.innerHTML= `(${num * 1})`
    outPolegada.innerHTML= `(${num * 12})`
    outAno.innerHTML= `(${num * 3.2217e-17})`
}
function calPole(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 0.0254})`
    outQui.innerHTML= `(${num * 2.54e-5})`
    outCent.innerHTML= `(${num *  2.54})`
    outMili.innerHTML= `(${num * 25.4})`
    outMicro.innerHTML= `(${num * 25400 })`
    outNano.innerHTML= `(${num * 2.54e+7})`
    outMilha.innerHTML= `(${num * 1.5783e-5})`
    outJarda.innerHTML= `(${num * 0.0277778})`
    outPe.innerHTML= `(${num * 0.0833333})`
    outPolegada.innerHTML= `(${num * 1})`
    outAno.innerHTML= `(${num * 2.6848e-18})`
}
function calAno(){
    let num= inNumero.value 
    outMetro.innerHTML= `(${num * 9.461e+15})`
    outQui.innerHTML= `(${num *9.461e+12})`
    outCent.innerHTML= `(${num * 9.461e+17})`
    outMili.innerHTML= `(${num * 9.461e+18})`
    outMicro.innerHTML= `(${num * 9.461e+21 })`
    outNano.innerHTML= `(${num * 9.461e+24})`
    outMilha.innerHTML= `(${num * 5.879e+12})`
    outJarda.innerHTML= `(${num * 1.035e+16})`
    outPe.innerHTML= `(${num * 3.104e+16})`
    outPolegada.innerHTML= `(${num * 3.725e+17})`
    outAno.innerHTML= `(${num * 1})`
}