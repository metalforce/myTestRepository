// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// 1. Создайте пустой объект user.

const user = {};

// 2. Добавьте свойство name со значением John.

user.name = "John";

// 3. Добавьте свойство surname со значением Smith.

user.surname = "Smith";

// 4. Измените значение свойства name на Pete.

user.name = "Pete";

// Удалите свойство name из объекта.

delete user.name;


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
// Должно работать так:
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return console.log(false);
    }
    return console.log(true);
}

const myObj = {
    name: "John",
    age: 20
};

isEmpty(myObj);


// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
//
const user1 = {
  name: "John"
};

// это будет работать?
user1.name = "Pete";

console.log(user1); // да, это будет работать,
// т.к. свойства объекта (внутри фигурных скобок) можно менять даже при объявлении через const


// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);


// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:
//
// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//
// P.S. Используйте typeof для проверки, что значение свойства числовое.

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);

function multiplyNumeric(obj) {
    for (let key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu);