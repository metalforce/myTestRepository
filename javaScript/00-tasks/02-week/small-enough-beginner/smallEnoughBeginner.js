// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript - задача
// https://www.codewars.com/kata/57cc981a58da9e302a000214/solutions/javascript/me/best_practice - решение

function smallEnough(a, limit){
    return !a.some(elem => elem > limit);
}

const arr = [78, 117, 110, 99, 104, 117, 107, 115];

console.log(smallEnough(arr, 150));

// ----------------------------------------------------------- //

function smallEnough2(a, limit) {
    for (let i of a) {
        if (i > limit) return false;
    }
    return true;
}

console.log(smallEnough2(arr, 100));
