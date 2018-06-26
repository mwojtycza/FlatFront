export class Expense {
    name: string
    cost: number
    date: string;
    editMode: boolean;
    _id: string

    constructor() {
        this.editMode = false;
    }
};