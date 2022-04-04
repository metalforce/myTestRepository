// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd - задача
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript/me/best_practice - решение

function filter_list(l) {
    return l.filter(key => typeof key === "number");
}

const arr = [1, 2, "a", "b"];

console.log(filter_list(arr));