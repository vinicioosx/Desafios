function calcular() {
    var numero = document.getElementById('inumero')
    var selecionar = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var numerovalor = Number(numero.value)
        selecionar.innerHTML = ''

        for (var contador = 1; contador <= 10; contador++){
            var opcoes = document.createElement('option')
            opcoes.text = `${numerovalor} x ${contador} = ${numerovalor * contador}`
            opcoes.value = `selecioanr${contador}`
            selecionar.appendChild(opcoes)
        }
    }
}