var button = document.getElementById('logar');
var email = document.getElementById('email');
var senha = document.getElementById('senha');
var email1 = document.createTextNode(email);
var senha1 = document.createTextNode(senha);
var email2 = document.createTextNode('lucas@fmm.com')
var senha2 = document.createTextNode('lucas2');
function logar(){
    if(email1==email2 && senha1==senha2){
        alert('deu');
    }
    else{
        alert('fds')
    }
}
alert(email);
button.onclick = logar;