// https://www.codewars.com/kata/55908aad6620c066bc00002a - задача
// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript/me/best_practice - решение

function XO(str) {
    let x = '';
    let o = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x += str[i];
        } else if (str[i].toLowerCase() === 'o') {
            o += str[i];
        }
    }

    return x.length === o.length ? true : false;
}

const string = "xxOoOx";

console.log(XO(string));