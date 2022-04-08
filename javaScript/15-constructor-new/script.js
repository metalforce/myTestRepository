// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
//
// function A() { ... }
// function B() { ... }
//
// let a = new A;
// let b = new B;
//
// alert( a == b ); // true
// Если да – приведите пример вашего кода.

const obj = {};

function A() {
    return obj;
}
function B() {
    return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true


// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function () {
        this.c = +prompt("a?", 0);
        this.d = +prompt("b?", 0);
    };
    this.sum = function () {
        return this.c + this.d;
    };
    this.mul = function () {
        return this.c * this.d;
    };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum= " + calculator.sum());
console.log("Mul= " + calculator.mul());


// Напишите функцию-конструктор Accumulator(startingValue).
//
// Объект, который она создаёт, должен уметь следующее:
//
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
//
// Ниже вы можете посмотреть работу кода:
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("Enter value: ", 0);
    };
}

const accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);