

class Perro{
    constructor(nombre){
        this.nombre = nombre;
    }
    //metodo
    hablar(){
        document.writeln(this.nombre + 'ladra')
    }

    alimentarse(){
        document.writeln( this.nombre + 'esta comiendo')
    }
}

let mascota_1 = new Perro('pancho');
mascota_1.hablar(); //pancho ladra
mascota_1.alimentarse();
document.writeln("<br>")
let mascota_2 = new Perro('Kika');
mascota_2.hablar();
mascota_2.alimentarse()



