// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
};

const matchName = (drivers, string) => {
    return drivers.filter( driver => driver.name === string);
}

const fuzzyMatch = (drivers, string) => {
    let stringLength = string.length;
    return drivers.filter( driver => driver.slice(0, stringLength) === string);
}