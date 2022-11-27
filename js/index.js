'use strict';

// Суворий режим / Strict Mode / Строгий режим

// В суворому режимі:

// 1 Видаються явні помилки при деяких некоректних операціях
// (в нестрогому - такий код мовчки ігнорувався)

// наприклад, встановлення властивостей примітивам викликає явну помилку
const n = 10;
n.name = 100;

// 2 Функції не мають this (в нестрогому this - window)
function f() {
  console.log('this :>> ', this);
}
f();

// Помилка при використанні функції-конструктора без new (витікає з попереднього)
function F() {
  this.a = 10;
}

const t = F();

// ...
