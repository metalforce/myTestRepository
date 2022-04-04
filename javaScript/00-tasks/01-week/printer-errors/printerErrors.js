// https://www.codewars.com/kata/56541980fa08ab47a0000040 - задача
// https://www.codewars.com/kata/56541980fa08ab47a0000040/solutions/javascript/me/best_practice - решение

function printerError(s) {
    let errors = 0;
    for (let i of s) {
        if (i > 'm') errors++;
    }
    return `${errors}/${s.length}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
