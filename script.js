function envoyer(){
    var x=document.forms['formulaire'].mail.value;
    var y=document.forms['formulaire'].subject.value;
    var z=document.forms['formulaire'].texxt.value;
    if (!x.replace(/\s+/, '').length){
        alert('Veuillez entrer votre E-mail!');
    }else if((!y.replace(/\s+/, '').length)&&(!z.replace(/\s+/, '').length)){
        alert('Veuilez entrer votre Sujet et votre Texte!');
  
    return false;
  }

    if (!y.replace(/\s+/, '').length){
        alert('Veuillez entrer votre Sujet!');
    }
    if (!z.replace(/\s+/, '').length){
        alert('Veuillez entrer votre Texte!');
    }
}

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navigation .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        remo
    })
})






