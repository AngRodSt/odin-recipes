const numbers = document.querySelectorAll('[data-number]')
const operacion = document.querySelectorAll('[data-operator]')
const clear = document.querySelector(".clear");
const lastScreen = document.querySelector("#LastScreen");
const currentScreen = document.querySelector('#CurrentScreen')
const equal = document.querySelector(".equal")
const sign = document.querySelector(".sign")
const porciento = document.querySelector(".porciento")
const point = document.querySelector(".point")


numbers.forEach((button)=>{
    button.addEventListener('click',()=>ApperNumber(button.textContent))
})
operacion.forEach((button)=>{
    button.addEventListener('click',()=>ApperOperator(button.textContent))
})
equal.addEventListener('click',()=>EqualFuncion())
clear.addEventListener('click',()=>clearF())
sign.addEventListener('click', ()=>signF())
porciento.addEventListener('click',()=>porcientoF())
point.addEventListener('click', ()=>punto())

var FirstNumber= 0
var SecondNumber = 0
var OpResult = null
var reset =false


function resett(){
    currentScreen.textContent=""
   reset=false;
}
function punto (){
    if(reset)return resett()
    if (currentScreen.textContent.includes("."))return
    currentScreen.textContent+="."
}
const porcientoF = ()=>{
    var a = Number(currentScreen.textContent)
    currentScreen.textContent = a / 100
}

const signF = ()=>{
   var a =  Number(currentScreen.textContent)
    currentScreen.textContent = a * -1
}

const clearF= ()=>{
    currentScreen.textContent=""
    lastScreen.textContent=""
    FirstNumber="";
    SecondNumber="";
    OpResult=null
}

const EqualFuncion = ()=>{
    if(OpResult==null){ return currentScreen.textContent=""}
    if(lastScreen.textContent==""){return currentScreen.textContent=0}
    SecondNumber = currentScreen.textContent
    currentScreen.textContent= round(FuncionOperacion(FirstNumber, OpResult,SecondNumber))
    lastScreen.textContent = `${FirstNumber}${OpResult}${SecondNumber}`
    OpResult=null;
    reset=true;
    
    
}

const ApperNumber = (number)=>{
    if(currentScreen.textContent==0 ||reset){resett()}
        currentScreen.textContent+=number    
    }

const ApperOperator = (operation)=>{
        if (OpResult!=null)evaluate()
        FirstNumber = currentScreen.textContent
        OpResult = operation
        lastScreen.textContent = `${FirstNumber}${OpResult}`;
        currentScreen.textContent='';
       }



const round = (number)=>{return Math.round(number*1000)/1000}


const FuncionSuma = (a,b)=>a+b;
const FuncionResta = (a,b)=>a-b;
const FuncionMultip = (a,b)=>a*b;
const FuncionDiv = (a,b)=>a/b;



const FuncionOperacion = (ap,operator,ap2)=>{
    var a = Number(ap)
    var b = Number(ap2)
    if(operator=="+"){
        return FuncionSuma(a,b);
    }
    else if(operator=="-"){
        return FuncionResta(a,b)
    }
    else if (operator=="x"){
       return FuncionMultip(a,b)
    }
    else if (operator=="/"){
       return FuncionDiv(a,b)
    }

}
 function evaluate (){
    SecondNumber = currentScreen.textContent
    currentScreen.textContent= round(FuncionOperacion(FirstNumber, OpResult,SecondNumber))
    lastScreen.textContent = `${FirstNumber}${OpResult}${SecondNumber}`
    OpResult=null
 }


//IMPUT ON THE KEYBORD
// POINT CLICK-- CAN'T BE MORE THEN ONE

