function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12){
        //bom dia
        img.src = 'images/manha.jpg'
        document.body.style.background = '#f0e1ce'
    } else if (hora >=12 && hora <= 18){
        //boa tarde
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#6a694d'
    } else {
        //boa noite
        img.src = 'images/noite.jpg'
        document.body.style.background = '#022449'
    }
}
