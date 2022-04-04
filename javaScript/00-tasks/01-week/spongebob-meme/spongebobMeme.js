// https://www.codewars.com/kata/5982619d2671576e90000017 - задача
// https://www.codewars.com/kata/5982619d2671576e90000017/solutions/javascript/me/best_practice - решение

function spongeMeme(sentence) {
    return sentence.split("").map((e, i) => i % 2 !== 0 ? e.toLowerCase() : e.toUpperCase()).join("");
}

console.log(spongeMeme("stop Making spongebob Memes!"));
