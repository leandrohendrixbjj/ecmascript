oopsGlobal = 12; //it will be global with var and without it.

function a(){
   var oopsGlobal; 
    oopsGlobal -= 1;
}

function b(){
    oopsGlobal -=1;
}

a();
b();
console.log(oopsGlobal);