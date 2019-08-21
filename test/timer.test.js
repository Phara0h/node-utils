describe('Timer', () => {

    describe('Start and stop test', () => {

        test('100 ms ', done => {
            var Timer = require('..').Timer;
            var time = new Timer().start();

            setTimeout(()=>{
                expect(time.stop().ms()).toBeGreaterThanOrEqual(90);
                done();
            }, 100);
        });

        test('10000 us', done => {
            var Timer = require('..').Timer;
            var time = new Timer().start();

            setTimeout(()=>{
                expect(time.stop().us()).toBeGreaterThanOrEqual(9000);
                done();
            }, 10);
        });

        test('10000000 ns', done => {
            var Timer = require('..').Timer;
            var time = new Timer().start();

            setTimeout(()=>{
                expect(time.stop().ns()).toBeGreaterThanOrEqual(9000000);
                done();
            }, 10);
        });
    });

    describe('Dasiy chain', () => {
        var Timer = require('..').Timer;
        var time = new Timer().start();

        test('100 ms', done => {
            setTimeout(()=>{
                expect(time.stop().ms()).toBeGreaterThanOrEqual(90);
                done();
            }, 100);
        });

        test('200 ms', done => {
            setTimeout(()=>{
                expect(time.stop().ms()).toBeGreaterThanOrEqual(180);
                done();
            }, 100);
        });
    });
});
