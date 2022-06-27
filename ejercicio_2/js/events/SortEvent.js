class SortEvent {
    constructor({ sort }) {
        this.sort = sort;
    }
    addNumber() {
        const num = this.sort.getInputNumber()
        if (this.sort.validateDuplicates(num)) {
            this.sort.addNumber(num);
            this.sort.drawGrid();
            this.sort.setInputNumber("");
        } else {
            alert("No puede ingresar duplicados");
        }
    }

    register() {
        this.sort.buttonAdd.addEventListener('click', (event) => {
            this.addNumber();
        });

        this.sort.buttonClear.addEventListener('click', (evento) => {
            this.sort.clear();
            this.sort.drawGrid();
            this.sort.setInputNumber("");
        });

        this.sort.buttonSort.addEventListener('click', (evento) => {
            this.sort.sortNumbers();
            this.sort.drawGrid({ flag: true });
        });

        this.sort.inputNumber.addEventListener('keypress', (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                this.addNumber();
            }
        });
    }
}

export { SortEvent }