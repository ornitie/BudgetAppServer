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
    private amount: number;
    private type: BillType;
}
