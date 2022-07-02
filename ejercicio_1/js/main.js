import { Calculadora } from "./models/Calculadora.js";
import { ListSubject } from "./models/ListSubject.js";
import { CalculadoraEvent } from './events/CalculadoraEvent.js';
import { ListSubjectEvent } from "./events/ListSubjectEvent.js"

function main(){

    const listSubject = new ListSubject({
        renderZone: document.getElementById("render-zone"),
        optionZone: document.getElementById("render-options"),
        inputSubject: document.getElementById("render-options"),
        addButton: document.getElementById("button-add"),
        controllerList: document.getElementById("controller-list"),
    });

    const calculadora = new Calculadora({
        enombre: document.getElementById("nombre"),
        edescuento: document.getElementById("descuento"),
        epapeleria: document.getElementById("papeleria"),
        ecarnet: document.getElementById("carnet"),
        etotal: document.getElementById("total"),
        eborrar: document.getElementById("borrar"),
        listSubject
    });

    const calculadoraEvent = new CalculadoraEvent({
        calculadora
    });

    const listSubjectEvent = new ListSubjectEvent({
        subject: listSubject,
        calculadora
    });

    calculadora.default();
    listSubject.default();
    calculadoraEvent.register();
    listSubjectEvent.register();
}

main();