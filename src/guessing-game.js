class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.step = 0;
        this.number = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.step = Math.round((this.max - this.min) / 2);
        this.number = this.min + this.step;
        return this.number
    }

    lower() {
        this.max = this.number;

    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;
