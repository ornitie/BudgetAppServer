import { Timespan } from "../timespan/timespan";

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
    readonly timespan: Timespan;

    constructor(id: string, amount: number, type: BillType, timespan: Timespan){
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.timespan = timespan;
    }
}
