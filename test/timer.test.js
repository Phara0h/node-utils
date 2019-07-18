describe('Timer', () => {

    describe('Start and stop test', () => {

        test('100 ms ', done => {
            var Timer = require('..').Timer;
            var time = new Timer().start();

            setTimeout(()=>{
                expect(time.stop().ms()).toBeGreaterThanOrEqual(100);
                done();
            }, 100);
        });

        test('10000 us', done => {
            var Timer = require('..').Timer;
            var time = new Timer().start();

            setTimeout(()=>{
                expect(time.stop().us()).toBeGreaterThanOrEqual(10000);
                done();
            }, 10);
        });

        test('100000 us', done => {
            var Timer = require('..').Timer;
            var time = new Timer().start();

            setTimeout(()=>{
                expect(time.stop().ns()).toBeGreaterThanOrEqual(1000000);
                done();
            }, 1);
        });
    });

    describe('Dasiy chain', () => {
        var Timer = require('..').Timer;
        var time = new Timer().start();

        test('100 ms', done => {
            setTimeout(()=>{
                expect(time.stop().ms()).toBeGreaterThanOrEqual(100);
                done();
            }, 100);
        });

        test('200 ms', done => {
            setTimeout(()=>{
                expect(time.stop().ms()).toBeGreaterThanOrEqual(200);
                done();
            }, 100);
        });
    });
});
