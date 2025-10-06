
import {Computador} from "./Computador.js"
import { Usuario } from "./Usuario.js";

const btnIngresar = document.getElementById("ingresar");
const btnConsultar = document.getElementById("consultar");
let salida = document.getElementById("salida");
let losUsuarios = [];

btnIngresar.addEventListener('click',insertarNuevoUsuario);
btnConsultar.addEventListener('click',filtrarIgualMarcas);


function insertarNuevoUsuario(){
    let horasUso = parseInt(document.getElementById("laCedula").value);
    let nombre = document.getElementById("elNombre").value;
    let saldoCuenta = parseFloat(document.getElementById("laEdad").value);
    let marca = document.getElementById("elNombre2").value;
    let velocidad = parseFloat(document.getElementById("laFrecuencia").value);
    let procesador = document.getElementById("elTipo").value;

    let objComputador = new Computador(marca, procesador, velocidad);
    let objUsuario = new Usuario(nombre, saldoCuenta, horasUso, objComputador);

    losUsuarios.unshift(objUsuario);
    salida.value = objUsuario.toString();
}

function procesarRespoteActionPerformed(){

}

function filtrarIgualMarcas(){
    let marcad = document.getElementById("laCedula2").value;
    console.log(marcad)
    let res;
    res = filtrarIgualMarca(losUsuarios, marcad);
    salida.value = res;
}

function filtrarIgualMarca(bd, marcad){
    console.log(bd, marcad)
    let res = `Los usuarios con computador de la marca ${marcad} son: \n`;
    let p = bd.find(x => x.marca = marcad);
    console.log(p)
    if(p){
     res += `Usuario: ${p.nombre} Procesador: ${p.suComputador.procesador} CostoEnergetico ${p.calcularCostoEnergetico()}\n`
    } return res;
}
