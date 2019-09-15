export class Expenses {
    constructor(npo, amount, catgeoryId, expenseId){
        this.npo = npo;
        this.amount = amount;
        this.categoryId = catgeoryId;
        this.expenseId = expenseId;
    }

    npo: string; 
    amount: number;
    categoryId: number;
    expenseId: number;
}