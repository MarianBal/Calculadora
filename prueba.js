var numero1 = prompt('Ingresa un número','');
numero1 = parseInt(numero1);
var operacion = prompt('Ingrese la operacion', '');
var numero2 = prompt('Ingresa un número','');
numero2 = parseInt(numero2);
var resultado;

if(!isNaN(numero1) && !isNaN(numero2)) {

switch (operacion) {
    case '+':
    resultado = numero1 + numero2;
    break;

    case '-':
    resultado = numero1 - numero2;
    break;

    case '*':
    resultado = numero1 * numero2;
    break;

    case '/':
    resultado = numero1 / numero2;
    break;
    // Completar…
    default:document.write('falta un dato');
    }
    if (typeof(resultado) !='undefined') {
        document.write(numero1 + operacion + numero2, ' = ',resultado);
    } else {
        document.write('Ingrese un numero');
    }
}
