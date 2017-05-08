import expect from 'expect';
//my functions
import arraySplitter from './arraySplitter';
import arrayToObject from './convertTwoDimensionalArrayToObject';

describe('first test', function () {
    it('should pass', function () {
        expect(true).toEqual(true);
    });
});

//Step 1: Turn array with single string into array of arrays in order to later convert to object
describe('Array Splitter', () => {
    it('Split Array Into Array of Arrays Split by : and ,', () => {

        //tests
        let testOne = ["Hello there: My Name is Daniel"];
        let testTwo = ["A: B", "C: D", "E: F", "G: H"];

        //apply functions
        let testOneOutput = arraySplitter(testOne);
        let testTwoOutput = arraySplitter(testTwo);

        //answers
        let testOneAnswer = [
            ["Hello there", "My Name is Daniel"]
        ];
        let testTwoAnswer = [
            ["A", "B"],
            ["C", "D"],
            ["E", "F"],
            ["G", "H"]
        ];

        expect(testOneOutput).toEqual(testOneAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
        expect(testTwoOutput).toEqual(testTwoAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
    });

    it('Returns false when not given an array as an input', () => {

        //tests
        let testOne = "This string is not: an array";
        let testTwo = {
            test: "this is an object"
        };
        let testThree = false;

        //apply functions
        let testOneOutput = arraySplitter(testOne);
        let testTwoOutput = arraySplitter(testTwo);
        let testThreeOutput = arraySplitter(testThree);

        //answers
        let testOneAnswer = false;
        let testTwoAnswer = false;
        let testThreeAnswer = false;

        expect(testOneOutput).toEqual(testOneAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
        expect(testTwoOutput).toEqual(testTwoAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
        expect(testThreeOutput).toEqual(testThreeAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
    });

    it('Should remove packages that are formatted without a package mapped to either a dependency or no dependencies', () => {

        //tests
        let testOne = ["One ", "Two: Three"];

        //apply functions
        let testOneOutput = arraySplitter(testOne);

        //answers
        let testOneAnswer = [
            ["Two", "Three"]
        ];

        expect(testOneOutput).toEqual(testOneAnswer).toBeA('array').toBeTruthy().toNotContain(":");
    });
});

//Step 2: Convert Array of Arrays into an actual Javascript object with keys and values
describe('Object Creator', () => {
    it('Should return an object when handed an array of arrays', () => {

        //tests
        let testOne = [
            ["One", "Two"],
            ["Three", "Four"]
        ];
        let testTwo = [
            ["One", ""],
            ["Two", ""]
        ];

        //apply functions
        let testOneOutput = arrayToObject(testOne);
        let testTwoOutput = arrayToObject(testTwo);

        //answers
        let testOneAnswer = {
            One: "Two",
            Three: "Four"
        };
        let testTwoAnswer = {
            One: "",
            Two: ""
        };

        expect(testOneOutput).toEqual(testOneAnswer).toBeA('object').toBeTruthy().toNotBeAn('array');
        expect(testTwoOutput).toEqual(testTwoAnswer).toBeA('object').toBeTruthy().toNotBeAn('array');
    });

    it('Should validate data is being passed properly(array of arrays)', () => {
        //tests
        let testOne = ["This is a one dimensional array", "That should not pass"];
        let testTwo = "This is a string that also should not pass";
        let testThree = {
            thisIsAnObject: "Should Fail"
        };
        
        //apply functions
        let testOneOutput = arrayToObject(testOne);
        let testTwoOutput = arrayToObject(testTwo);
        let testThreeOutput = arrayToObject(testThree);

        //answers
        let testOneAnswer = false;
        let testTwoAnswer = false;
        let testThreeAnswer = false;

        expect(testOneOutput).toEqual(testOneAnswer).toNotBeA('object').toBeA('boolean').toBeFalsy();
        expect(testTwoOutput).toEqual(testTwoAnswer).toNotBeA('object').toBeA('boolean').toBeFalsy();
        expect(testThreeOutput).toEqual(testThreeAnswer).toNotBeA('object').toBeA('boolean').toBeFalsy();
    });
});