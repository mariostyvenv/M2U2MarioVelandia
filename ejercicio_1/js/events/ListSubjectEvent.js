class ListSubjectEvent {
    constructor({ subject, calculadora }) {
        this.subject = subject;
        this.calculadora = calculadora;
    }

    addEventButtonDelete({ idbutton }) {
        document.getElementById(idbutton).addEventListener('click', (event) => {
            this.subject.deleteButton({
                id: event.currentTarget.dataset.key,
                group: event.currentTarget.dataset.group,
            });
            this.calculadora.calculate();
        });
    }

    register() {

        this.subject.addButton.addEventListener('click', (event) => {
            const idbutton = this.subject.addItem({
                idItem: this.subject.getSubjectValue()
            });
            this.addEventButtonDelete({ idbutton });
            this.calculadora.calculate();
        });

    }
}

export { ListSubjectEvent }