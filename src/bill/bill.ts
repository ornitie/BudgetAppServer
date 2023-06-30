enum BillType {
    delivery,
    healthcare,
    transportation,
    subscription,
    occasional,
    cash,
    investment,
    debt,
    bills,
}

export class Bill {
    private id: string;
    private amount: number;
    private type: BillType;

    constructor(id: string, amount: number, type: BillType){
        this.id = id;
        this.amount = amount;
        this.type = type;
    }
}
