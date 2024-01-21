var numero = document.getElementById('ifornumero')
var lista = document.getElementById('iforlista')
var resultado = document.getElementById('resultado')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
       
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}