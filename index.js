// code your solution here
function superbowlWin(arrayOfObjects) {
    const winObject = arrayOfObjects.find(obj => obj.result === "W");
    return winObject ? winObject.year : undefined;
}
const superBowls = [
    { year: 2019, result: "L" },
    { year: 2020, result: "W" },
    { year: 2021, result: "L" }
];

console.log(superbowlWin(superBowls)); // Output: 2020
