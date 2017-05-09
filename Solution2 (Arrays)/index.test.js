import expect from 'expect';
//my functions
import splitPackagesAndDependencies from './splitPackagesAndDependencies';

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