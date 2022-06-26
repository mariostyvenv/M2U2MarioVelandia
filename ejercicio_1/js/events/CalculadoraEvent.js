class CalculadoraEvent {
    constructor({ calculadora }) {
        this.calculadora = calculadora;
    }

    register() {
        this.calculadora.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.calculadora.calculate();
        })
        this.calculadora.materias.addEventListener('change', (event) => {
            this.calculadora.setDescuento(this.calculadora.getDescuento())
        })
        this.calculadora.valor.addEventListener('change', (event) => {
            this.calculadora.setDescuento(this.calculadora.getDescuento())
        })
        this.calculadora.borrar.addEventListener('click', (event) => {
            this.calculadora.default();
        })
    }
}

export { CalculadoraEvent }