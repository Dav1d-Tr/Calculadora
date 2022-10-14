function Limpiar() {
    document.getElementById("formulario").reset();
}
function suma(){
    var num1=parseInt(document.getElementById('first_value').value);
    var num2=parseInt(document.getElementById('second_value').value);
    document.getElementById('resultado').innerHTML = num1+num2;
}

function resta(){
    var num1=parseInt(document.getElementById('first_value').value);
    var num2=parseInt(document.getElementById('second_value').value);
    document.getElementById('resultado').innerHTML = num1 - num2;
}

function multiplicacion(){
    var num1=parseInt(document.getElementById('first_value').value);
    var num2=parseInt(document.getElementById('second_value').value);
    document.getElementById('resultado').innerHTML = num1 * num2;
}

function division(){
    var num1=parseInt(document.getElementById('first_value').value);
    var num2=parseInt(document.getElementById('second_value').value);
    document.getElementById('resultado').innerHTML = num1 / num2;
}

