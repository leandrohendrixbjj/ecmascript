
function wakeup(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("WakeUp");
        },1000);
   });        
}

function brushTeeth(){
    return "BrushTeeth";
}

//Para usar o await wakeup() deve retornar uma Promisse
//A função start deve ter a sigla async no inicio.
async function start(){
    let wakeup_ = await wakeup();
    let brushTeeth_ = brushTeeth();

    console.log(wakeup_);
    console.log(brushTeeth_);
}

start();