import {Computador} from "./Computador.js"

export class Usuario{
    constructor(nombre, saldoCuenta, horasUso, suComputador){
        if(typeof nombre !== "string"){
            throw new Error("El nombre debe ser una cadena");            
        } if(typeof saldoCuenta !== "number"){
            throw new Error("El saldo debe ser un número");            
        } if(typeof horasUso !== "number"){
            throw new Error("Las hora uso debe ser numero");            
        } if(!(suComputador instanceof Computador)){
            throw new Error("SuComputador debe ser una instancia");            
        }
        this.nombre = nombre;
        this.saldoCuenta = saldoCuenta;
        this.horasUso = horasUso;
        this.suComputador = suComputador;
    }
    calcularCostoEnergetico() {
        let res;
        if(this.horasUso > 15){
            res = "ALTO"
        }else if(this.suComputador.marca == "Apple"){
            res = "MEDIO"
        } else if(this.horasUso < 12){
            res = "BAJO"
        } return res
    }
    toString(){
        return `Nombre ${this.nombre} saldoCuenta ${this.saldoCuenta} horasUso ${this.horasUso} Computador ${this.suComputador}`
    }


}