let splitPackagesAndDependencies = (packageArray) => {
     if (!Array.isArray(packageArray)) return false;

     let arrayContainer = [];
     let packages = [];
     let dependencies = [];
     
     packageArray.forEach((service) => {
        let newPair = service.split(": ")
        if (newPair.length != 2) return false;
        packages.push(newPair[0].replace(/\s/g, ''));
        dependencies.push(newPair[1].replace(/\s/g, ''));
    })
    
    arrayContainer.push(packages);
    arrayContainer.push(dependencies);
    
    return arrayContainer;
};

export default splitPackagesAndDependencies;