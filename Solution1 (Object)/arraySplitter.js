let arraySplitter = (servicesArray) => {
    if (!Array.isArray(servicesArray)) return false;

    let formattedServices = [];
    servicesArray.forEach((service) => {
        let newPair = service.split(": ")
        if (newPair.length != 2) return false;
        formattedServices.push(newPair)
    })
    return formattedServices;
}

export default arraySplitter;