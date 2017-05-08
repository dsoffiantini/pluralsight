let packageInstaller = (packageObject) => {
    if (!(Object.prototype.toString.call(packageObject) === "[object Object]") || !packageObject)
    {   
        return false;
    }
    return true;
}

export default packageInstaller;