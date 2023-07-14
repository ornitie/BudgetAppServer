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
    readonly id: string;
    readonly amount: number;
    readonly type: BillType;

    constructor(id: string, amount: number, type: BillType){
        this.id = id;
        this.amount = amount;
        this.type = type;
    }
}
