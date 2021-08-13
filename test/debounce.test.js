
describe('Debounce', () => {
    test('500ms calls 3 times', () => {
        var debounce = require('..').debounce;
        var counter = 0;

        const test = debounce((counter) => {
            return counter += 1;
        }, 500);

        counter = test(counter);
        counter = test(counter);
        counter = test(counter);
        setTimeout(()=>{
            expect(counter).toEqual(1);
        }, 500);
    });
});
