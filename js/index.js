// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).

function random10() {
  let add = 0;
  if (arguments[0] != undefined) {
    add = arguments[0];
  }
  return Math.round(Math.random() * 10) + add;
}

const arrFirst = [];

for (let index = 0; index < 10; index++) {
  arrFirst.push(random10());
}
console.log('arr', arrFirst);

let arrSecond = [...arrFirst];
const arrThird = [...arrFirst];
// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
// Firts realization

arrFirst.shift();
arrFirst.unshift(random10(10));
arrFirst.pop();
arrFirst.push(random10(10));

// second realization
arrSecond = [random10(10), ...arrSecond.slice(1, -1), random10(10)];

//third realization
arrThird.splice(0, 1, random10(10));
arrThird.splice(-1, 1, random10(10));

console.log('arr first realization', arrFirst);
console.log('arr second realization', arrSecond);
console.log('arr third realization', arrThird);

// 2 Вивести розмір масиву.
console.log('arrFirst.length', arrFirst.length);
// 3 Зробити копію масиву.
const arrFirstCopy = Array.from(arrFirst);

// // Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли

// 4 Вивести елементи з парними індексами.
let evenIndex = 0;
console.group('only even index');
do {
  console.log(`arrFirst[${evenIndex}] `, arrFirst[evenIndex]);
  evenIndex += 2;
} while (evenIndex < arrFirst.length);
console.groupEnd();

// 5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
console.group('only couples');

for (const element in arrFirst) {
  if (element % 2 === 0) {
    console.log(element);
  }
}
console.groupEnd();

// 6 Вивести індекси нульових елементів (елемент дорівнює нулю).

const awesomeArray = [];
for (let index = 0; index < 10; index++) {
  if (Math.round(Math.random()) > 0) {
    awesomeArray.push(0);
  } else {
    awesomeArray.push(random10());
  }
}

console.log('awesomeArray', awesomeArray);

console.group('indices of zero elements');
for (let index = 0; index < awesomeArray.length; index++) {
  if (awesomeArray[index] == 0) {
    console.log('index: ', index);
  }
}
console.groupEnd();

// 7 Підрахувати кількість нульових елементів.

let zeroCount = 0;

for (let index = 0; index < awesomeArray.length; index++) {
  if (awesomeArray[index] == 0) {
    zeroCount++;
  }
}
console.log('zeroCount', zeroCount);

// // Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
const excellentArray = [-1, 5, 0, 9, -10];
console.log(
  'excellentArray',
  excellentArray.filter((element) => element != 0)
);

// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).

const prettyArray = [99, 5, 0, 9, 30];
console.log(
  'prettyArray',
  prettyArray.map((element) => element / 100)
);

// 10 Вивести елементи масиву, зведені у куб.

const magicalArray = [];
for (let index = 0; index < 10; index++) {
  magicalArray.push(random10());
}
console.log('magicalArray', magicalArray);

console.group('magicalArray**2');
magicalArray.forEach((element, index) =>
  console.log(`element[${index}]`, element ** 2)
);
console.groupEnd();

// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.
const treasureArray = [2, 5, 10, 5, 8];
const indexReturn = treasureArray.findIndex((element) => element ** 2 === 100);
switch (indexReturn) {
  case -1:
    alert('no such element exists');
    break;

  default:
    treasureArray.splice(indexReturn, 1);
    break;
}
console.log('treasureArray', treasureArray);

// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
const primeArray = [2, 3, 5, 7, 11];
function isPrime(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return false;
}
console.log('every prime arrFirst', arrFirst.every(isPrime));
console.log('every prime clearArray', primeArray.every(isPrime));

// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
const someNegArray = [5, 2, 3, -1, 5];
function isNegative(number) {
  return number < 0;
}
console.log('some negative arrFirst', arrFirst.some(isNegative));
console.log('some negative someNegArray', someNegArray.some(isNegative));

//*JS. Users array
//прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача
console.group('JS. Users array');
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return this.firstName;
};
const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}
console.log('users[0].getFullName();', users[0].getFullName());

//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
console.log(
  'users',
  users.filter((user) => user.age >= 6 && user.age <= 8 && !user.isMale)
);

// 1.3 Видалити з масиву користувача з email useremail5@gmail.com

users.splice(
  users.findIndex((user) => user.email === 'useremail5@gmail.com'),
  1
);
// 1.4 Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com
console.log(
  'users.some',
  users.some((user) => user.email === 'useremail99@gmail.com')
);
// 1.5 Перевірити, чи всі користувачі підписані (subscribed).
console.log(
  'users.every',
  users.every((user) => user.isSubscribed)
);

console.groupEnd();
