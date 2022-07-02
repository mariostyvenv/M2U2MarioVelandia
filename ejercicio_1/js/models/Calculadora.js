class Calculadora {

    constructor({
        enombre,
        edescuento,
        epapeleria,
        ecarnet,
        etotal,
        eborrar,
        listSubject
    }) {
        this.nombre = enombre;
        this.descuento = edescuento;
        this.papeleria = epapeleria;
        this.carnet = ecarnet;
        this.total = etotal;
        this.borrar = eborrar;
        this.listSubject = listSubject;
    }

    getNombre() {
        return parseInt(this.nombre.value);
    }

    getDescuento() {
        return parseInt(this.descuento.value);
    }

    getPapeleria() {
        return parseInt(this.papeleria.value);
    }

    getCarnet() {
        return parseInt(this.carnet.value);
    }

    setNombre(nombre) {
        this.nombre.value = nombre;
    }

    setDescuento(descuento) {
        this.descuento.value = descuento;
    }

    setPapeleria(papeleria) {
        this.papeleria.value = papeleria;
    }

    setCarnet(carnet) {
        this.carnet.value = carnet;
    }

    setTotal(total) {
        this.total.innerHTML = total;
    }

    default() {
        this.setNombre("");
        this.setTotal(0);
        this.setDescuento(0);
        this.setPapeleria(20000);
        this.setCarnet(8000);
        this.listSubject.default();
    }

    getDescuento() {
        return this.listSubject.getTotal() * 20 / 100;
    }

    calculate() {
        const valorPapeleria = this.getPapeleria();
        const valorCarnet = this.getCarnet();
        const totalMaterias = this.listSubject.getTotal();
        const valorDescuento = this.getDescuento();
        const total = totalMaterias - valorDescuento + valorPapeleria + valorCarnet;
        this.setDescuento(valorDescuento.toLocaleString('en-US', {
            style: 'currency',
            currency: 'COP',
        }));
        this.setTotal(total.toLocaleString('en-US', {
            style: 'currency',
            currency: 'COP',
        }))
    }

}

export { Calculadora }