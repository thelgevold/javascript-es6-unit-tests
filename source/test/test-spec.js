import {Test} from './test';

describe('Test', function(){
    it('should return hello', function(){
        var test = new Test();

        expect(test.test()).toBe('hello');
    });

    it('should not return hi', function(){
        var test = new Test();

        expect(test.test()).not.toBe('hi');
    });
})