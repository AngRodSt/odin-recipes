num=1
let contenedor = document.querySelector(".container");
let size = 256;
let si16=document.querySelector(".size16");
let si24=document.querySelector(".size24");
let si32=document.querySelector(".size32");

//Arreglar condicionales
//Arreglar tamanos de los recuadros
//Anadir paleta de colores
si24.addEventListener('click',()=>{
    size=576;
})

for(let i=0;i<size;i++){
    let divi= document.createElement("div");
    contenedor.appendChild(divi);
        divi.addEventListener('mouseover',()=>{
            divi.style="background-color:black"});
        let negro = document.querySelector(".black")
        negro.addEventListener('click',()=>{
            divi.addEventListener('mouseover',()=>{
                divi.style="background-color:black"
            })
        })
        let clear = document.querySelector(".clear");
        clear.addEventListener('click',()=>{
            divi.style="background-color:white"
        })
        let erase = document.querySelector(".erase");
        erase.addEventListener('click',()=>{
            divi.addEventListener('mouseover',()=>{
                divi.style="background-color:white"
            })
        })

}
