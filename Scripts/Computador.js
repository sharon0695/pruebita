
export class Computador{
    constructor(marca, procesador, velocidad){
        if(typeof marca !== "string"){
            throw new Error("La marca debe ser una cadena");            
        } if(typeof procesador !== "string"){
            throw new Error("El procesador debe ser cadena");            
        } if(typeof velocidad !== "number"){
            throw new Error("La velocidad debe ser numero");            
        }
        this.marca = marca;
        this.procesador = procesador;
        this.velocidad = velocidad;
    }
    toString(){
        return ` Marca: ${this.marca} Procesador: ${this.procesador} Velocidad: ${this.velocidad}`
    }
}