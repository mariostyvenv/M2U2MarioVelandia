import { subjects } from "../database/Subjects.js"

class ListSubject {

    constructor({ renderZone, optionZone, inputSubject, addButton, controllerList }) {
        this.renderZone = renderZone;
        this.optionZone = optionZone;
        this.inputSubject = inputSubject;
        this.addButton = addButton;
        this.controllerList = controllerList;
        this.subjects = subjects;
    }

    getTotal() {
        let total = 0;
        for (const sub of this.getItems(true)) {
            total += sub.value;
        }
        return total;
    }

    getItems(state = false) {
        return this.subjects.filter(sub => sub.state === state);
    }

    getSubjectValue() {
        return this.inputSubject.value;
    }

    getAndChangeStateItem({ idItem }) {

        this.subjects = this.subjects.map((item) => {
            if (item.id === idItem) {
                item.state = !item.state
            }
            return item;
        });

        return this.subjects.find((item) => item.id === idItem)
    }

    setDefaultItems() {
        this.subjects = this.subjects.map((item) => {
            item.state = false;
            return item;
        });

        document.querySelectorAll('.groupItem').forEach(item => {
            item.remove();
        });

        this.controllerList.style.display = "";
    }

    deleteButton({ id, group }) {
        this.getAndChangeStateItem({ idItem: id });
        document.getElementById(group).remove();
        this.drawOptions();
    }

    addItem({ idItem }) {

        const objectItem = this.getAndChangeStateItem({ idItem });
        const idButton = `btd-${objectItem.id}`;
        const idGroup = `tr-${objectItem.id}`;
        const valueItem = objectItem.value.toLocaleString('en-US', {
            style: 'currency',
            currency: 'COP',
        });

        const item = `
        <tr id="${idGroup}" class="groupItem">
            <td class="text-center">
                <input type="text" class="form-control" value="${objectItem.name}" disabled>
            </td>
            <td>
                <input type="text" class="form-control" value="${valueItem}" disabled>
            </td>
            <td class="text-center">
                <button class="btn btn-danger btn-delete" type="button" id="${idButton}" data-key="${idItem}" data-group="${idGroup}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                </button>
            </td>
        </tr>
        `;

        this.renderZone.insertAdjacentHTML('afterbegin', item);
        this.drawOptions();
        return idButton;
    }

    drawOptions() {
        this.optionZone.innerHTML = "";
        this.getItems().forEach((optionItem) => {
            const item = `<option value="${optionItem.id}">${optionItem.name}</option>`;
            this.optionZone.insertAdjacentHTML('beforeend', item);
        });

        if (this.getItems().length > 0) {
            this.controllerList.style.display = "";
        } else {
            this.controllerList.style.display = "none";
        }

    }

    default() {
        this.setDefaultItems();
        this.drawOptions();
    }
}

export { ListSubject }