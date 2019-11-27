'use strict';

/**
    * Timer class for keeping accurate stop watch like time.
    */
class Timer {
    /**
      * Constructs a Timer instance.
      *
      * @param {BigInt} [startTime=0] the time the Timer started at.
      * @param {BigInt} [totalTime=0] the total time the Timer elapsed.
      * @returns {Timer} Returns the new Timer instance.
      */
    constructor(startTime = 0, totalTime = 0) {
        this.startTime = startTime;
        this.totalTime = totalTime;
    }

    /**
      * Starts the stopwatch
      *
      * @returns {Timer} Returns it's self.
      */
    start() {
        this.startTime = process.hrtime.bigint();
        return this;
    }

    /**
      * Stops the stopwatch
      *
      * @returns {Timer} Returns it's self.
      */
    stop() {
        this.totalTime = process.hrtime.bigint() - this.startTime;
        return this;
    }

    /**
      * Gets the elapsed time in nanoseconds.
      *
      * @returns {Number} ns.
      */
    ns() {
        return Number(this.totalTime);
    }

    /**
      * Gets the elapsed time in microseconds.
      *
      * @returns {Number} us.
      */
    us() {
        return Number(this.totalTime) / 1000;
    }

    /**
      * Gets the elapsed time in millieconds.
      *
      * @returns {Number} ms.
      */
    ms() {
        return Number(this.totalTime) / 1000000;
    }
}

module.exports = Timer;
