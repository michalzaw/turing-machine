export class State {
    nextState: number;
    symbol: number;
    direction: number;

    constructor() {
        this.symbol = 0;
        this.nextState = 0;
        this.direction = 0;
    }
}