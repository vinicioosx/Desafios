function tabuada() {
    var numero = document.getElementById('inumero')
    var selecionar = document.getElementById('seltabuada')
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        // Sempre vem em string, tem que converter pra Number
        var numerotexto = Number(numero.value)
        selecionar.innerHTML = ''
        for (var contador = 1; contador <= 10; contador++) {
            var opcoes = document.createElement('option')
            opcoes.text = `${numerotexto} x ${contador} = ${numerotexto * contador}`
            opcoes.value = `selecionar${contador}`
            selecionar.appendChild(opcoes)

        }
    }
    
}