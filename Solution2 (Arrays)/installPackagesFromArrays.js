let installPackagesFromArrays = (packageAndDependencyArrays) => {
    if (packageAndDependencyArrays.length != 2) return false;
    let packages = packageAndDependencyArrays[0];
    let dependencies = packageAndDependencyArrays[1];
    if (packages.length != dependencies.length) return false;
    let order = [];
    let timesToLoop = 0;
    for (let i = 0; i < dependencies.length; i++) {
        if (dependencies[i] === "") {
            order.push(packages[i]);
        } else {
            timesToLoop++;
        }
    }

    while(dependencies.indexOf("") != -1)
    {
        packages.splice(dependencies.indexOf(""), 1);
        dependencies.splice(dependencies.indexOf(""), 1);
    }

    for (let i = 0; i <= timesToLoop; i++) {
        for (let j = 0; j < packages.length; j++) {
            let dependencyAlreadyInstalled = order.indexOf(dependencies[j]) != -1;
            let packageNotAlreadyInstalled = packages.indexOf(packages[j]) != -1;

            if (dependencyAlreadyInstalled && packageNotAlreadyInstalled) {
                order.push(packages[j]);
                packages.splice(j, 1);
                dependencies.splice(j, 1);
                break;
            }
        }
    }

    if (dependencies.length || packages.length) {
        return false;
    } else {
        return order.toString().replace(/,/g, ", ");
    }

};

export default installPackagesFromArrays;