let contenedor = document.querySelector(".container");
const defautSize= 16;
let currentColor = 'black';


let slider = document.querySelector(".range");
let  sizeSlider = document.querySelector(".size");

//El slider actualiza los numeros donde vaya pasando
slider.onmousemove = (e)=>UpdateSize(e.target.value);
//El slider actualiza el tamaño de los recuadros según donde pare
slider.onchange = (e)=> ChangeSize(e.target.value);

let currentSize = defautSize;

function setCurrentSize(newsize){
    currentSize=newsize;
    }

function ChangeSize(value){
    setCurrentSize(value);
    UpdateSize(value);
    ReloadCont();
}
function UpdateSize(value){
    sizeSlider.innerHTML = `${value} x ${value}`;
}
function ReloadCont(){
    Clear();
    SetUp(currentSize);
}
function Clear(){
    contenedor.innerHTML='';
}

let color = document.querySelector(".color");

function ChangeColor(newcolor){
currentColor=newcolor;
}
color.oninput = (e) => ChangeColor(e.target.value);

function SetUp(currentSize){
    contenedor.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    contenedor.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    
    for(let i=0;i<currentSize*currentSize;i++){
        let divi= document.createElement("div");
        contenedor.appendChild(divi);

        divi.addEventListener('mouseover',()=>{
            divi.style.backgroundColor=currentColor});
        
        let colorBut= document.querySelector(".colorBut")
        colorBut.addEventListener('click',()=>{divi.addEventListener('mouseover',()=>{
            divi.style.backgroundColor=currentColor});})
        let clear = document.querySelector(".clear");
        clear.addEventListener('click',()=>{
            divi.style="background-color:white"
        })
        let erase = document.querySelector(".erase");
        erase.addEventListener('click',()=>{
            divi.addEventListener('mouseover',()=>{
                divi.style="backgroud-color:white";
            })
        })
    
    }
}


window.onload=()=>{
    SetUp(defautSize);
    
}