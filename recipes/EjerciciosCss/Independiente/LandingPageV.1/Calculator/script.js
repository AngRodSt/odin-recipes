const numbers = document.querySelectorAll('[data-number]')
const operacion = document.querySelectorAll('[data-operator]')
const clear = document.querySelector(".clear");
const lastScreen = document.querySelector("#LastScreen");
const currentScreen = document.querySelector('#CurrentScreen')
const equal = document.querySelector(".equal")
const sign = document.querySelector(".sign")
const porciento = document.querySelector(".porciento")


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

var FirstNumber= ''
var SecondNumber = ''
var OpResult = null

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
    SecondNumber = currentScreen.textContent
    currentScreen.textContent=FuncionOperacion(FirstNumber, OpResult,SecondNumber)
    lastScreen.textContent = `${FirstNumber}${OpResult}${SecondNumber}`
    
}

const ApperNumber = (number)=>{
       if(currentScreen!=""){
        currentScreen.textContent+=number
       }
    }
const ApperOperator = (operation)=>{
        if (OpResult!==null){}
        FirstNumber = currentScreen.textContent
        OpResult = operation
        lastScreen.textContent = `${FirstNumber}${OpResult}`
        currentScreen.textContent="";     
}


const FuncionSuma = (a,b)=>a+b;
const FuncionResta = (a,b)=>a-b;
const FuncionMultip = (a,b)=>a*b;
const FuncionDiv = (a,b)=>a/b;


//REVISAR FUNCION
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


//NUMBERS HAVE TO BE MAX 4 DECIMAL NUMBERS AFTER THE POINT
//IMPUT ON THE KEYBORD
//DOBLE CLICK ON OPERATOR 

