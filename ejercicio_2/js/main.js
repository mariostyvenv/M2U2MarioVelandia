import { Sort } from "./models/Sort.js";
import { SortEvent } from "./events/SortEvent.js";

function main(){
    const sort = new Sort({
        buttonAdd: document.getElementById("add-number"),
        buttonSort: document.getElementById("sort-numbers"),
        buttonClear: document.getElementById("clear-numbers"),
        inputNumber: document.getElementById("inumber"),
        gridElement: document.getElementById("grid-numbers")
    });

    const sortEvent = new SortEvent({
        sort
    });

    sortEvent.register()
}

main();