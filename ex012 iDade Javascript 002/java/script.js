function verificar() {
    var dataatual = new Date()
    var anoatual = dataatual.getFullYear()
    var anorecebido = document.getElementById('anonascimento')
    var resposta = document.querySelector('div#resultado')
    if (anorecebido.value.length == 0 || Number(anorecebido.value) > anoatual) {
        window.alert('[Erro]')
    } else {
        var sexo = document.getElementsByName('generosexo')
        var idade = anoatual - Number(anorecebido.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                imagem.setAttribute('src', 'criançahomem.png')
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //Adulto
            } else {
                //Idoso
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}