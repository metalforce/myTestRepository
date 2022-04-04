// https://www.codewars.com/kata/55908aad6620c066bc00002a - задача
// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript/me/best_practice - решение

function XO(str) {
    let x = '';
    let o = '';

    for (const value of str) {
        if (value.toLowerCase() === 'x') {
            x += value;
        } else if (value.toLowerCase() === 'o') {
            o += value;
        }
    }

    return x.length === o.length;
}

const string = "xxOoOx";

console.log(XO(string));