// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7 - задача
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/solutions/javascript/me/best_practice - решение

function gooseFilter (birds) {
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter((key) => !geese.includes(key));
};

const arr = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];

console.log(gooseFilter(arr));