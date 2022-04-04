// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132 - задача
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/javascript/me/best_practice - решение

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

const code = "123h67";

console.log(validatePIN(code));
