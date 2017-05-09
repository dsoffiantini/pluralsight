import arraySplitter from './arraySplitter';
import convertTwoDimensionalArrayToObject from './convertTwoDimensionalArrayToObject';
import installPackagesFromObject from './installPackagesFromObject';

let packageInstaller = (packageArray) => {
    let formattedPackageArray = arraySplitter(packageArray);
    let packageObject;
    let packageOrder;

    if (formattedPackageArray === false) {
        return false;
    } else {
        packageObject = convertTwoDimensionalArrayToObject(formattedPackageArray);
    }

    if (packageObject === false) {
        return false;
    } else {
        packageOrder = installPackagesFromObject(packageObject);
    }

    if (packageOrder === false) {
        return false;
    } else {
        return packageOrder;
    }
};

export default packageInstaller;