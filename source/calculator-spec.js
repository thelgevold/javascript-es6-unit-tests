import {Calculator} from './calculator';

describe('Calculator', () => {

   it('should add two numbers', () => {

       let calculator = new Calculator();

       let sum = calculator.add(1,4);

       expect(sum).toBe(5);
   });

    it('should subtract two numbers', () => {

        let calculator = new Calculator();

        let sum = calculator.subtract(4,1);

        expect(sum).toBe(3);
    });

});