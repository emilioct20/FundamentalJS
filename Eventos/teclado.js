document.addEventListener('keydown', callBack)
function callBack(evt){
    if(evt.keyCode === 65){
        alert("You presed this key: 'a'");
        return;
    }else{
        console.log(evt.keyCode)
        console.log(String.fromCharCode(evt.which))
    }
}


document.addEventListener('keydown', listaEventos);

function listaEventos(evt){
    document.getElementById('eventkey').innerHTML = evt.keyCode
    document.getElementById('eventCode').innerHTML = evt.code
    document.getElementById('eventKeycode').innerHTML = evt.keyCode
    document.getElementById('eventWhich').innerHTML = evt.which
    document.getElementById('StringfromCharCode').innerHTML = String.fromCharCode(evt.keyCode)

}