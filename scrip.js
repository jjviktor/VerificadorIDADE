function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dado e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.borderRadius = '50%';
        img.style.width = '150px';
        img.style.height = '150px';

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Kids
                img.setAttribute('src','boy1.jpg')
            } else if (idade <21) {
                //youngs
                img.setAttribute('src','boy2.jpg')
            } else if (idade <50) {
                //Adultero
                img.setAttribute('src','boy3.jpg')
            } else {
                //idoso
                img.setAttribute('src','boy4.jpg')
            }
        } else if (fsex[1].checked) {
            gênero= 'Mulher'
            if (idade >=0 && idade < 10) {
                //Kids
                img.setAttribute('src','girl1.jpg')
            } else if (idade <21) {
                //youngs
                img.setAttribute('src','girl2.jpg')
            } else if (idade <50) {
                //Adultero
                img.setAttribute('src','girl3.jpg')
            } else {
                //idoso
                img.setAttribute('src','girl4.jpg')
            }
        }
        res.innerHTML = `Dedectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img);
    }
}