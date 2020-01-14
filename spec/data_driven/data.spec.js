
describe('data driven tests', () => {
    let i = 0;
    while (i < 10) {
        it('test true' + ' ' + i, async () => {

            expect(true).toBe(true);
        });
        i++;
    }

});