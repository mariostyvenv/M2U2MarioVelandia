class Calculadora {

    constructor({eform, enombre, ematerias, evalor, edescuento, epapeleria, ecarnet, etotal, eborrar}){
        this.form = eform;
        this.nombre = enombre;
        this.materias = ematerias;
        this.valor = evalor;
        this.descuento = edescuento;
        this.papeleria = epapeleria;
        this.carnet = ecarnet;
        this.total = etotal;
        this.borrar = eborrar;
    }

    getNombre(){
        return parseInt(this.nombre.value);
    }
    
    getMaterias(){
        return parseInt(this.materias.value);
    }

    getValor(){
        return parseInt(this.valor.value);
    }

    getDescuento(){
        return parseInt(this.descuento.value);
    }

    getPapeleria(){
        return parseInt(this.papeleria.value);
    }
    
    getCarnet(){
        return parseInt(this.carnet.value);
    }

    setNombre(nombre){
        this.nombre.value = nombre;
    }
    
    setMaterias(materias){
        this.materias.value = materias;
    }

    setValor(valor){
        this.valor.value = valor;
    }

    setDescuento(descuento){
        this.descuento.value = descuento;
    }

    setPapeleria(papeleria){
        this.papeleria.value = papeleria;
    }
    
    setCarnet(carnet){
        this.carnet.value = carnet;
    }

    setTotal(total){
        this.total.innerHTML = total;
    }

    default(){
        this.setNombre("")
        this.setMaterias(0)
        this.setValor(0)
        this.setTotal(0)
        this.setDescuento(0)
        this.setCarnet(20000)
        this.setPapeleria(8000)
    }

    getTotalMaterias(){
        return this.getMaterias()*this.getValor();
    }

    getDescuento(){
        return this.getTotalMaterias()*20/100;
    }

    calculate(){
        const valorPapeleria = this.getPapeleria();
        const valorCarnet = this.getCarnet();
        const totalMaterias = this.getTotalMaterias();
        const valorDescuento = this.getDescuento();
        const total = totalMaterias-valorDescuento+valorPapeleria+valorCarnet;
        this.setTotal(total)
    }
}

export { Calculadora }