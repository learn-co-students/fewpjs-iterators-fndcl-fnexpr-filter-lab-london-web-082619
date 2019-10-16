
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

