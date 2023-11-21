function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero= ''
        var img = document.createElement('img') // Essa linha ira criar dinamicamente uma tag img dentro do HTML
        img.setAttribute('id', 'foto') //criar um atributo para a tag img como por exemplo com colocar um id
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#006eff'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imagens/meninocrianca.png')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#d400ff'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'imagens/meninacrianca.png')
            } else if (idade < 25){
                //jovem
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center' //tag para alterar o css usando o JavaScript (var.style.oque vc deseja alterar)
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos!`
        res.appendChild(img) //adicionar um elemento, nesse caso a imagem
    }
}