import splitPackagesAndDependencies from './splitPackagesAndDependencies';
import installPackagesFromArrays from './installPackagesFromArrays';

let packageInstaller = (inputArray) => {
    let formattedInput = splitPackagesAndDependencies(inputArray);
    let packageOrder;

    if (formattedInput === false){
        return false;
    }
    else {
        packageOrder = installPackagesFromArrays(formattedInput);
    }

    if (packageOrder === false) {
        return false;
    }
    else {
        return packageOrder;
    }

};

export default packageInstaller;