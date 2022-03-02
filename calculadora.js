
    //pegando as const do HTML
const display = document.querySelector('.display');
const equal = document.querySelector('.equal');

function insert(vl){    
    display.innerHTML += vl; //mais e igual para não apagar o n anterior
} 

function calc(){
    let num = document.querySelector('.display').innerHTML;
    if(display){
        document.querySelector('.display').innerHTML = eval(display.innerHTML)
    }
} 
    
    
function backSpace(){  //apaga um n por vez
    if(display.textContent){
        let num = document.querySelector('.display').innerHTML;
        display.innerHTML = num.substring(0, num.length - 1);        
    }

}

function clean(){  //limpa todo o siplay
    display.innerHTML = '';
}



