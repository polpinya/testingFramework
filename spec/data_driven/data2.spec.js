
const table = [{
    test: 'integers',
    n1: 2,
    n2: 2,
    result: 2
},
{
    test: 'zero',
    n1: 0,
    n2: 2,
    result: 0
},
{
    test: 'negative',
    n1: -1,
    n2: 2,
    result: -1
},
{
    test: 'decimals',
    n1: 3,
    n2: 5,
    result: 7.5
}];

describe('data driven test with table', () => {

    table.forEach(element => {
        it('can convert' + ' ' + element.test, async () => {
            const n1 = element.n1;
            const n2 = element.n2;

            const result = conversion(n1, n2);
            expect(result).toEqual(element.result);
        });
    });
});

function conversion(n1, n2) {
    return (n1 * n2) / 2
}