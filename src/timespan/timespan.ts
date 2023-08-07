enum TimespanType {
    monthly,
    daily,
    weekly,
    yearly,
}

export class Timespan {
    readonly id: string;
    readonly name: string;
    readonly type: TimespanType;

    constructor(id: string, name: string, type: TimespanType){
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
