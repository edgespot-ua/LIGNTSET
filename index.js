
//1-----виведденя інофрмації в консоль
console.log('привет');








//2-----  змінні та типи змінних 

let mesage //змінна let 
mesage = 'ghbdgbdfb';
console.log(mesage);

const masagg = 'ghbvfvv'  //змінна const 

//змінні можна обявити декілька змінних
let name =  'vbhjvfd',   age = 28,   isDeveloper = true ;

//в одній змінній можна вказувати іншу змінну 
const name_2 = 'Олександр';
let name_3 = name_2;

//змінні на початку стоврення можуть працувати без вказання типу змінної. 
//але цього робити не можна. ДЛЯ ЦЬОГО НА ПОЧПАТКУ ПРОГРАМИ ВКАЗУЄМО 
/*   use strict  */ 







//Типи даних у JavaScript. Перевірка типів (typeof), перетворення типів. Інтерполяція рядків.

// типи даних:

const name_4 = 'Олекандр'; // string (Рядок)
const age_1  = 28; // number (Число)
const isDeveloper_1 = true; // boolean (Логічний тип)
const power = 99999999999n; // bigint (Велике ціле число)
const symbol = Symbol(); // symbol (Символ)
const something = undefined; // undefined (Невизначене значення)
 

const user = {
    login: '123',
    password: 'qwerty',
};  // object (Об'єкт)


const data = null; // null (Порожнє значення)


// для того щоб перевірити тип змінної ми виористовуємо 
/*    typeof ___    */

//щоб преоброзовать число явно в інший тип даних  потрібно зробити наступне
// console.log( _Тип_даних_ ( _змінна_ ) )

let agee = 11;

console.log(String(age))