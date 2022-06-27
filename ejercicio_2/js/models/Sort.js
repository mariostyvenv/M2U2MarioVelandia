class Sort {

    constructor({ inputNumber, buttonAdd, buttonSort, buttonClear, gridElement }) {
        this.inputNumber = inputNumber;
        this.buttonAdd = buttonAdd;
        this.buttonSort = buttonSort;
        this.buttonClear = buttonClear;
        this.gridElement = gridElement;
        this.numbers = [];
    }

    getInputNumber(){
        return parseInt(this.inputNumber.value)
    }

    addNumber(input){
        this.numbers.push(parseInt(input))
    }

    setInputNumber(input){
        this.inputNumber.value = input
    }

    clear(){
        this.numbers = []
    }

    sortNumbers(){
        let continueLoop = true;
        while(continueLoop){
            continueLoop = false;
            for (let index = 0; index < this.numbers.length; index++) {
                let copyNumber = 0;
                if(this.numbers[index] > this.numbers[index+1]){
                    copyNumber = this.numbers[index+1]
                    this.numbers[index+1] = this.numbers[index];
                    this.numbers[index] = copyNumber;
                    continueLoop = true;
                }
            }
        }
    }

    validateDuplicates(input){
        for (const number of this.numbers) {
            if(input === number) return false;
        }
        return true;
    }

    drawGrid(flag = false) {
        this.gridElement.innerHTML = "";
        const badge = (min = true) => {
            return `<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">${min ? 'Menor': 'Mayor'}</span>`
        }

        for (const number of this.numbers) {
            this.gridElement.insertAdjacentHTML('beforeend', `
                <div class="col p-1 position-relative">
                    <div class="rounded fs-1 bg-primary text-white text-center">${number}</div>
                    ${(flag && this.numbers[this.numbers.length-1] === number) ? badge(false): ""}
                    ${(flag && this.numbers[0] === number) ? badge(): ""}
                </div>
            `);
        }
    }

}

export { Sort }