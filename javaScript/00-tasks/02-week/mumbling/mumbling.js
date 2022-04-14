// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript - задача
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript/me/best_practice - решение

function accum(s) {
    return s.split('').map((v, i) => v.toUpperCase() + v.toLowerCase().repeat(i)).join('-');
}

console.log(accum("AsFnGuTgx"));
