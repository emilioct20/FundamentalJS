//Funcion simple


/*
function square(numbrer){
    return number * numbrer;
}

*/

/*


function saludar(){
    document.writeln('saludar')
}




*/


function valida_hora(hora){
    if (0<= hora && hora < 5){
        document.writeln('Qp enfermo por que estas despierto a esta hora')
    }else if(5<=hora && hora<12){
        document.writeln('Buenos dias')
    }else if(12<=hora && hora< 20){
        document.writeln('Buenas tardes')
    }else if(20<=hora && hora<24){
        document.writeln('Buenas noches')
    }else(
        document.writeln('texto invalido')
    )
}
