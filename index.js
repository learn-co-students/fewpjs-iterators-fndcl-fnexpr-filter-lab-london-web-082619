// Code your solution here

//case sensitive

const drivers = ["Takeshi", "david", "Paul", "una", "Dolice", "dave"];
const driver = "Una"
const driverLtrs = "da"
const driverObjs = [{name: "Takeshi", age: 1},{name: "Mikasa", age: 2},{name: "Una", age: 3}]

const findMatching = (drivers, driver) => {
    let matches = drivers.filter(d => {
         return d.toLowerCase() === driver.toLowerCase()
    })
    console.log(matches)
    return matches
};

findMatching(drivers, driver);

const fuzzyMatch = (drivers, driverIni) => {
    let matches = drivers.filter(d => {
        return d.slice(0,2) === driverIni
    })
    console.log(matches)
    return matches
};

fuzzyMatch(drivers, driverLtrs);

const matchName = (driverObjs, driver) => {
    let matches = driverObjs.filter(d => {
        return d.name === driver
    })
    console.log(matches)
    return matches
};

matchName(driverObjs, driver);
