// Каким будет результат выполнения этого кода?
// P.S. Здесь есть подвох :)

let user = {
  name: "Джон",
  go: function() { console.log(this.name) }
};


(user.go()); // из-за круглых скобок будет ошибка, код не выполнится.
// Либо на 7 строке поставить ";", либо на 9 убрать внешние круглые скобки


// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
//
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj;
let method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object] обычный вызов метода

(obj.go)();             // (2) [object Object] обычный вызов метода

(method = obj.go)();    // (3) undefined вызов через функцию

(obj.go || obj.stop)(); // (4) undefined вызов через функцию


// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user2 = makeUser();

console.log(user2.ref.name); // ошибка: значение this вызывается не как метод, а как свойство объекта, получается undefined


// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read() {
      this.a = +prompt("a?", 0);
      this.b = +prompt("b?", 0);
  },
  sum() {
      return this.a + this.b;
  },
  mul() {
      return this.a * this.b;
  }  
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
//
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().up().showStep();





