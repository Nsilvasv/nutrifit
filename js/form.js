var addButton = document.querySelector("#adicionar-paciente");
addButton.addEventListener("click", function() {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var Nome = form.nome.value 
    var Peso = form.peso.value 
    var Altura = form.altura.value 
    var Gordura = form.gordura.value 

    // criando elementos
    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = Nome
    pesoTd.textContent = Peso
    alturaTd.textContent = Altura
    gorduraTd.textContent = Gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)
});