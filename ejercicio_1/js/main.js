import { Calculadora } from "./models/Calculadora.js";
import { CalculadoraEvent } from './events/CalculadoraEvent.js'

function main(){

    const calculadora = new Calculadora({
        eform: document.getElementById("form-calculator"),
        enombre: document.getElementById("nombre"),
        ematerias: document.getElementById("materias"),
        evalor: document.getElementById("valor"),
        edescuento: document.getElementById("descuento"),
        epapeleria: document.getElementById("papeleria"),
        ecarnet: document.getElementById("carnet"),
        etotal: document.getElementById("total"),
        eborrar: document.getElementById("borrar"),
    })

    const calculadoraEvent = new CalculadoraEvent({
        calculadora
    })

    calculadora.default()
    calculadoraEvent.register()
}

main();