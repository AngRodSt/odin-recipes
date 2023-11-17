const numbers = document.querySelectorAll('[data-number]')
const operacion = document.querySelectorAll('[data-operator]')
const clear = document.querySelector(".clear");
const lastScreen = document.querySelector("#LastScreen");
const currentScreen = document.querySelector('#CurrentScreen')
const equal = document.querySelector(".equal")


numbers.forEach((button)=>{
    button.addEventListener('click',()=>ApperNumber(button.textContent))
})
operacion.forEach((button)=>{
    button.addEventListener('click',()=>ApperOperator(button.textContent))
})

//BOTON IGUAL ARREGLAR
equal.addEventListener('click',()=>{
    currentScreen.textContent= ""
})


const ApperNumber = (number)=>{
       if(currentScreen!=""){
        currentScreen.textContent+= number 
       }
    }
const ApperOperator = (operation)=>{
        var screen = currentScreen.textContent
        lastScreen.textContent += `${screen}${" "}${operation}${" "}`
        currentScreen.textContent="";

}
const FuncionSuma = (a,b)=>a+b;
const FuncionResta = (a,b)=>a-b;
const FuncionMultip = (a,b)=>a*b;
const FuncionDiv = (a,b)=>a/b;
const FuncionPorc = (a,b)=>a*(b/100);

//REVISAR FUNCION
const FuncionOperacion = (ap,operator,ap2)=>{
    
    if(operator=="+"){
        FuncionSuma(ap,ap2);
    }
    else if(operator=="-"){
        FuncionResta(ap,ap2)
    }
    else if (operator=="x"){
        FuncionMultip(ap,ap2)
    }
    else if (operator=="/"){
        FuncionDiv(ap,ap2)
    }
    else if (operator=="%"){
       FuncionPorc(ap,ap2)
    }
    

}



