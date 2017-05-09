let packageInstaller = (packageObject) => {
    if (!(Object.prototype.toString.call(packageObject) === "[object Object]") || !packageObject) {
        return false;
    } else {
        let order = [];
        let packages = Object.keys(packageObject);
        let timesToLoop = 0;
        for (let key of Object.keys(packageObject)) {
            if (key.toString() === packageObject[key].toString()) {
                return false;
            } else if (packageObject[key] === "") {
                order.push(key.toString());
                packages.splice(packages.indexOf(key.toString()), 1);
            } else {
                timesToLoop++;
            }
        }
        for (let i = 0; i < timesToLoop; i++) {

            for (let key of Object.keys(packageObject)) {
                let dependencyAlreadyInstalled = order.indexOf(packageObject[key]) != -1;
                let packageNotAlreadyInstalled = packages.indexOf(key) != -1;

                if (dependencyAlreadyInstalled && packageNotAlreadyInstalled) {

                    order.push(key.toString());
                    packages.splice(packages.indexOf(key.toString()), 1);
                    break;
                }
            }

        }

        if (!packages.length) {
            return order.toString().replace(/,/g, ", ");
        } else {
            return false;
        }
    }
}

export default packageInstaller;