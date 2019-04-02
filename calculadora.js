
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