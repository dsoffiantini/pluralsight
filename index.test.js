import expect from 'expect';
//my functions
import arraySplitter from './arraySplitter';

describe('first test', function(){
    it('should pass', function(){
        expect(true).toEqual(true);
    });
});

//Step 1: Turn array with single string into array of arrays in order to later convert to object
describe('Array Splitter', () => {
    it('Split Array Into Array of Arrays Split by : and ,', () => {

        //tests
        let testOne = ["Hello there: My Name is Daniel"];
        let testTwo = ["A: B","C: D","E: F","G: H"];
        let testThree = "This string is not: an array";

        //apply functions
        let testOneOutput = arraySplitter(testOne);
        let testTwoOutput = arraySplitter(testTwo);
        let testThreeOutput = arraySplitter(testThree);

        //answers
        let testOneAnswer = [["Hello there", "My Name is Daniel"]];
        let testTwoAnswer = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"]];
        let testThreeAnswer = false;

        expect(testOneOutput).toEqual(testOneAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
        expect(testTwoOutput).toEqual(testTwoAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
        expect(testThreeOutput).toEqual(testThreeAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
    });
});
