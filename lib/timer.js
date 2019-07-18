class Timer {
    constructor(table, defaultModel) {
        this.startTime = 0;
        this.totalTime = 0;
    }

    start() {
        this.startTime = process.hrtime.bigint();
        return this;
    }

    stop() {
        this.totalTime = process.hrtime.bigint() - this.startTime;
        return this;
    }

    ns() {
        return Number(this.totalTime);
    }

    us() {
        return Number(this.totalTime) / 1000;
    }

    ms() {
        return Number(this.totalTime) / 1000000;
    }
}

module.exports = Timer;
