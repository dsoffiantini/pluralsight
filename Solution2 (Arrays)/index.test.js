import expect from 'expect';
//my functions
import splitPackagesAndDependencies from './splitPackagesAndDependencies';
import installPackagesFromArrays from './installPackagesFromArrays';

describe('Split Input Array Into Packages and Dependencies Arrays', () => {
    it('Should return an array that contains seperated arrays of packages and depedencies', () => {

        //tests
        let testOne = ["One: ", "Two: One", "Three: One"];
        let testTwo = ["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "]
        let testThree = ["KittenService: CamelCaser", "CamelCaser: "];

        //apply functions
        let testOneOutput = splitPackagesAndDependencies(testOne);
        let testTwoOutput = splitPackagesAndDependencies(testTwo);
        let testThreeOutput = splitPackagesAndDependencies(testThree);

        //answers
        let testOneAnswer = [["One", "Two", "Three"], ["", "One", "One"]];
        let testTwoAnswer = [["KittenService", "Leetmeme", "Cyberportal", "CamelCaser", "Fraudstream", "Ice"], ["", "Cyberportal", "Ice", "KittenService", "Leetmeme", ""]];
        let testThreeAnswer = [["KittenService", "CamelCaser"], ["CamelCaser", ""]];

        expect(testOneOutput).toEqual(testOneAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
        expect(testTwoOutput).toEqual(testTwoAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
        expect(testThreeOutput).toEqual(testThreeAnswer).toBeAn('array').toBeTruthy().toNotContain(":");
    });

    it('Returns false when not given an array as an input', () => {

        //tests
        let testOne = "This string is not: an array";
        let testTwo = {
            test: "this is an object"
        };
        let testThree = false;

        //apply functions
        let testOneOutput = splitPackagesAndDependencies(testOne);
        let testTwoOutput = splitPackagesAndDependencies(testTwo);
        let testThreeOutput = splitPackagesAndDependencies(testThree);

        //answers
        let testOneAnswer = false;
        let testTwoAnswer = false;
        let testThreeAnswer = false;

        expect(testOneOutput).toEqual(testOneAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
        expect(testTwoOutput).toEqual(testTwoAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
        expect(testThreeOutput).toEqual(testThreeAnswer).toNotBeA('array').toBeA('boolean').toBeFalsy();
    });

    it('Should remove all spaces from packages and dependencies', () => {

        //tests
        let testOne = ["One     : ", "   Two  : One   ", "Three   :    One"];
        let testTwo = ["KittenService   :    ", "Leetmeme   : Cyberportal   ", "Cyber  portal: Ice  ", "CamelCaser   : KittenService  ", "Fraudstream  : Leetm  eme", "Ic  e: "]
        let testThree = ["KittenS  ervice: CamelCaser  ", "CamelCaser           : "];

        //apply functions
        let testOneOutput = splitPackagesAndDependencies(testOne);
        let testTwoOutput = splitPackagesAndDependencies(testTwo);
        let testThreeOutput = splitPackagesAndDependencies(testThree);

        //answers
        let testOneAnswer = [["One", "Two", "Three"], ["", "One", "One"]];
        let testTwoAnswer = [["KittenService", "Leetmeme", "Cyberportal", "CamelCaser", "Fraudstream", "Ice"], ["", "Cyberportal", "Ice", "KittenService", "Leetmeme", ""]];
        let testThreeAnswer = [["KittenService", "CamelCaser"], ["CamelCaser", ""]];

        expect(testOneOutput).toEqual(testOneAnswer).toBeAn('array').toBeTruthy().toNotContain(":").toNotContain(" ");
        expect(testTwoOutput).toEqual(testTwoAnswer).toBeAn('array').toBeTruthy().toNotContain(":").toNotContain(" ");
        expect(testThreeOutput).toEqual(testThreeAnswer).toBeAn('array').toBeTruthy().toNotContain(":").toNotContain(" ");
    });
});

describe('Install Package From Arrays of Packages and Dependencies', () => {
    it('Should install packages in the correct order', () => {

        //test
        let testOne = [["One", "Two", "Three"], ["", "One", "One"]];
        let testTwo = [["KittenService", "Leetmeme", "Cyberportal", "CamelCaser", "Fraudstream", "Ice"], ["", "Cyberportal", "Ice", "KittenService", "Leetmeme", ""]];
        let testThree = [["KittenService", "CamelCaser"], ["CamelCaser", ""]];

        //apply functions
        let testOneOutput = installPackagesFromArrays(testOne);
        let testTwoOutput = installPackagesFromArrays(testTwo);
        let testThreeOutput = installPackagesFromArrays(testThree);

        //answers
        let testOneAnswer = "One, Two, Three";
        let testTwoAnswer = "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream";
        let testThreeAnswer = "CamelCaser, KittenService";

        expect(testOneOutput).toEqual(testOneAnswer).toBeA('string').toBeTruthy().toNotBeAn('object');
        expect(testTwoOutput).toEqual(testTwoAnswer).toBeA('string').toBeTruthy().toNotBeAn('object');
        expect(testThreeOutput).toEqual(testThreeAnswer).toBeA('string').toBeTruthy().toNotBeAn('object');
    });

    it('Should return false if packages contain a cycle', () => {

        //tests
        let testOne = [["KittenService", "Leetmeme", "Cyberportal", "CamelCaser", "Fraudstream", "Ice"], ["", "Cyberportal", "Ice", "KittenService", "", "Leetmeme"]];
        let testTwo = [["A", "B"],["B", "A"]];
        let testThree = [["A", "B", "C"],["A", "B", "C"]];

        //apply functions
        let testOneOutput = installPackagesFromArrays(testOne);
        let testTwoOutput = installPackagesFromArrays(testTwo);
        let testThreeOutput = installPackagesFromArrays(testThree);

        //answers
        let testOneAnswer = false;
        let testTwoAnswer = false;
        let testThreeAnswer = false;

        expect(testOneOutput).toEqual(testOneAnswer).toNotBeA('string').toBeA('boolean').toBeFalsy();
        expect(testTwoOutput).toEqual(testTwoAnswer).toNotBeA('string').toBeA('boolean').toBeFalsy();
        expect(testThreeOutput).toEqual(testThreeAnswer).toNotBeA('string').toBeA('boolean').toBeFalsy();
    });

});