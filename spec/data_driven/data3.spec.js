const excelToJson = require('convert-excel-to-json');
const path = require('path');
const sourceFile = path.join(__dirname, './data_driven.xlsx'); 
const data = excelToJson({
    sourceFile: sourceFile ,
    columnToKey: {
        '*': '{{columnHeader}}'
    },
    header: {
        rows: 1
    },
    sheets: ['Sheet1']
});
const table = data.Sheet1;

describe('can convert from an excel file', () => {
    table.forEach(element => {
        it('can convert' + ' ' + element.test, async () => {
            const n1 = element.n1;
            const n2 = element.n2;

            const result = conversion(n1, n2);
            expect(result).toEqual(element.result);
        });
    });
});




// backend

function conversion(n1, n2){
    return n1+n2/2;
}