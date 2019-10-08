import {MaskedInputed} from "./src/MaskedInput";

describe('MaskedInputed' , () =>{
    describe('format', () =>{
        const cases = [
            {value: '', mask:'(###) ###-####' ,expected: ''},
            {value: '1', mask:'(###) ###-####' ,expected: '1('},
            {value: '12345', mask:'(###) ###-####' ,expected: '(123) 45'},
            {value: '123456', mask:'(###) ###-####' ,expected: '(123) 456'},
            {value: '1234567890000', mask:'(###) ###-####' ,expected: '(123) 456-7890'},
        ]
        cases.forEach(({value,mask,expected},i) => {
            if(`test ${i + 1}: ${value} => ${mask}`, ()=>{
                expect(MaskedInputed.format(value,mask)).tobe(expected);
            })
        })
    })
})