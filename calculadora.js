
var resultado = document.getElementById('pantalla');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var suma = document.getElementById('suma');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var resta = document.getElementById('resta');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var multiplicacion = document.getElementById('multiplicacion');
var borrar = document.getElementById('borrar');
var cero = document.getElementById('cero');
var division = document.getElementById('division');

var numeroUno;
var operacion;
var numeroDos;

function limpiar(){
   resultado.textContent = '';
}

document.onkeydown = function (e){
    if(e.keyCode === 49 || e.keyCode === 97){
        resultado.textContent = resultado.textContent + '1';
        e.preventDefault();

    }else if(e.keyCode === 50 || e.keyCode === 98){
        resultado.textContent = resultado.textContent + '2';
        e.preventDefault();

    }else if(e.keyCode === 51 || e.keyCode === 99){
        resultado.textContent = resultado.textContent + '3';
        e.preventDefault();

    }else if(e.keyCode === 52 || e.keyCode === 100){
        resultado.textContent = resultado.textContent + '4';
        e.preventDefault();

    }else if(e.keyCode === 53 || e.keyCode === 101){
        resultado.textContent = resultado.textContent + '5';
        e.preventDefault();

    }else if(e.keyCode === 54 || e.keyCode === 102){
        resultado.textContent = resultado.textContent + '6';
        e.preventDefault();

    }else if(e.keyCode === 55 || e.keyCode === 103){
        resultado.textContent = resultado.textContent + '7';
        e.preventDefault();

    }else if(e.keyCode === 56 || e.keyCode === 104){
        resultado.textContent = resultado.textContent + '8';
        e.preventDefault();

    }else if(e.keyCode === 57 || e.keyCode === 105){
        resultado.textContent = resultado.textContent + '9';
        e.preventDefault();

    }else if(e.keyCode === 48 || e.keyCode === 106){
        resultado.textContent = resultado.textContent + '0';
        e.preventDefault();

    }else  if(e.keyCode === 48 || e.keyCode === 96 ){
        resultado.textContent = resultado.textContent + '0';
        e.preventDefault();

    }else if(e.keyCode ===46 ){
        limpiar();
        numeroUno =0;
        numeroDos=0;

    }else if(e.keyCode === 107){
        numeroUno = resultado.textContent;
        operacion = '+';
        limpiar();

    }else if(e.keyCode === 108){
        numeroUno = resultado.textContent;
        operacion = '*';
        limpiar();
    
    }else if(e.keyCode === 109){
        numeroUno = resultado.textContent;
        operacion = '-';
        limpiar();

    }else if(e.keyCode === 111){
        numeroUno = resultado.textContent;
        operacion = '/';
        limpiar();
    }else if(e.keyCode ===187 || e.keyCode ===13){
        numeroDos = resultado.textContent;
        resolver();
    }
            
}

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + '1';
}

dos.onclick = function(e){
    resultado.textContent = resultado.textContent + '2';
}

tres.onclick = function(e){
    resultado.textContent = resultado.textContent + '3';
}

cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + '4';
}

cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + '5';
}

seis.onclick = function(e){
    resultado.textContent = resultado.textContent + '6';
}

siete.onclick = function(e){
    resultado.textContent = resultado.textContent + '7';
}

ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + '8';
}

nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + '9';
}

cero.onclick = function(e){
    resultado.textContent = resultado.textContent + '0';
}

borrar.onclick = function(e){
    limpiar();
    numeroUno =0;
    numeroDos=0;
}

suma.onclick = function(e){

    numeroUno = resultado.textContent;
    operacion = '+';
    limpiar();

}

resta.onclick = function(e){

    numeroUno = resultado.textContent;
    operacion = '-';
    limpiar();

}

multiplicacion.onclick = function(e){

    numeroUno = resultado.textContent;
    operacion = '*';
    limpiar();

}

division.onclick = function(e){

    numeroUno = resultado.textContent;
    operacion = '/';
    limpiar();

}

igual.onclick = function(e){

    numeroDos = resultado.textContent;
    resolver();

}

function resolver(){

switch (operacion) {

    case '+':
    resultado.textContent = parseFloat(numeroUno) + parseFloat(numeroDos);
    break;

    case '-':
    resultado.textContent = parseFloat(numeroUno) - parseFloat(numeroDos);
    break;

    case '*':
    resultado.textContent = parseFloat(numeroUno) * parseFloat(numeroDos);
    break;

    case '/':
    resultado.textContent = parseFloat(numeroUno) / parseFloat(numeroDos);
    break;
    }
 }
