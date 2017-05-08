let arrayToObject = (arrayOfArrays) => {
    if (!Array.isArray(arrayOfArrays)) return false;

    let allItemsAreArrays = true;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (!Array.isArray(arrayOfArrays[i])) {
            allItemsAreArrays = false;
            break;
        }
    }

    if (allItemsAreArrays) {
        let packageObject = arrayOfArrays.reduce((service, [key, value]) => {
            service[key] = value;
            return service;
        }, {})
        return packageObject;
    }

    else {
        return false;
    }


};

export default arrayToObject;