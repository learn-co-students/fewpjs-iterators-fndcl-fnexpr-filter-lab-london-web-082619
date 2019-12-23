
const body = document.querySelector('body')

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

document.addEventListener("DOMContentLoaded", () => {
    console.log('Hello');
    findMatching(drivers, 'Sally');

})

function findMatching(drivers, string){

    let matchingDrivers = [];

    function checkName(name, string){
        if (name.toLowerCase() == string.toLowerCase()){
            matchingDrivers.push(name);
            debugger
        }
    }

    drivers.filter(driver => checkName(driver, string));
    return matchingDrivers;
}

function fuzzyMatch(drivers, letters){
    let fuzzyMatches = [];

    function fuzzy(driver, letters){
        if (driver.match(`^${letters}`)){
            fuzzyMatches.push(driver)
        }
    }

    drivers.filter(driver => fuzzy(driver, letters));
    return fuzzyMatches;
}

function matchName(driversObjects, string){

    let matchingDrivers = [];

    function checkName(driverObject, string){
        if (driverObject.name.toLowerCase() == string.toLowerCase()){
            matchingDrivers.push(driverObject);
        }
    }

    driversObjects.filter(driverObject => checkName(driverObject, string));
    return matchingDrivers;
}