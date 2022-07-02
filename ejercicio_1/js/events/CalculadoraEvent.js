class CalculadoraEvent {
    constructor({ calculadora }) {
        this.calculadora = calculadora;
    }

    register() {
        this.calculadora.borrar.addEventListener('click', (event) => {
            this.calculadora.default();
        });
    }
}

export { CalculadoraEvent }