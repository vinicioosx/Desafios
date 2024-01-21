function contar() {
    var inicio = document.getElementById('textoinicio')
    var fim = document.getElementById('textofim')
    var passo = document.getElementById('textopasso')
    var resposta = document.getElementById('resposta')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resposta.innerHTML = 'Impossivel contar!'
    
    } else {
        //AQUI ESTA PEGANDO O VALOR LA EM CIMA E CONVERTENDO PRA UM NUMERO
        resposta.innerHTML = 'Contando: <br>'
        var inicionumero = Number(inicio.value)
        var fimnumero = Number(fim.value)
        var passonumero = Number(passo.value)
        if (passonumero <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            passonumero = 1
        }

        if (inicionumero < fimnumero) {
            // Contagem Crescente
            for (var contador = inicionumero; contador <= fimnumero; contador += passonumero) {
                resposta.innerHTML += ` ${contador} \u{1f449}`
            }

        } else {
            // Contagem Regressiva
            for (var contador = inicionumero; contador >= fimnumero; contador -= passonumero) {
                resposta.innerHTML += ` ${contador} \u{1f449}`
            }
            
        }
        resposta.innerHTML += `\u{1f3c1}`
    }
    
}