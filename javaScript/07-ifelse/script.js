// Выведется ли alert?

if ("0") {
    alert('Привет!'); // выведется, т.к. не пустая строка
}

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let modalString = prompt("Какое «официальное» название JavaScript?", "");

if (modalString == 'ECMAScript') {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

let modalInt = prompt("Какое «официальное» название JavaScript?", 0);

if (modalInt > 0) {
    alert(1);
} else if (modalInt < 0) {
    alert(-1);
} else {
    alert(0);
}

// Перепишите конструкцию if с использованием условного оператора '?':
// let result;
//
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите if..else с использованием нескольких операторов '?'.
// let message;
//
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
        login == '' ? 'Нет логина' :
            '';