var pacientes = document.querySelectorAll('.paciente');

for (var loop = 0; loop < pacientes.length; loop++) {

    var paciente = pacientes[loop];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var imc = peso / (altura*altura);
    tdImc.textContent = imc.toFixed(2);

    var pesoValido = validaPeso(peso);

    if (!pesoValido) {
        tdPeso.classList.add("campo-invalido");
        tdPeso.textContent = 'peso invalido';
    }

    if (altura < 1 || altura > 2.50) {
        tdAltura.classList.add('campo-invalido');
        tdAltura.textContent = 'altura invalido';
    }

    function validaPeso(peso){

        if (peso < 1 || peso > 250) {
            return false;
        } else {
            return true;
        }
    }

    function calImc(peso, altura) {
        var imcNew = 0
        imcNew =  peso / (altura*altura);
        return imcNew.toFixed(2);
        
    }
}

