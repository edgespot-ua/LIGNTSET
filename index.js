
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











//Математика в JavaScript. Арифметичні оператори, оператори порівняння.
//  Декремент і інкремент.

console.log(2+2)
console.log(10-1)
console.log(2*2)
console.log(4/2)


//піднесення числа в степінь
console.log(2 ** 3)

//залишок від ділення 
console.log(5%2)


//інкремент та дікремент 

let count = 10;

count--
count++

//оператори порівняння 
console.log(5>3) //true 
console.log(10<1)// false 
console.log(2>=2)//true 
console.log(3<=0)//false 

console.log(5==5) //true 
console.log(5!=5) //false  


//порівняння строк 

console.log('a'<'6')
console.log('s'>'f')
console.log('JavaSctipt' > 'Java')


//порівняння різних типів даних 
//для перевірки різних типів на рівність використовується 
//    ===     або   !==

console.log (2 === 2) //true 
console.log('3'===3) // false 

 

// в JS щоб привести тип string до числового типу використовується 
// унарний плюс 
let str_1 = '5'

console.log( typeof str_1)  //через функцію typeof пезультат string 

console.log( typeof +str_1)//через функцію typeof пезультат number













//JavaScript условия if else. Тернарный оператор. Логические операторы. Оператор нулевого слияния.

if(5<1){

}else if(3<1){

} 
else{

}



//тернарний оператор   - ? - 

const year = 2024 

const message_32 = year === 2024 
? 'Істина' 

: year === 3000     //  ЩЕ ОДНА ПЕРЕВІРКА 
? 'ще одна істина' //

: 'не істина'


console.log(message_32)


//логічний оперант або  -  || -
false || true 



//логічний оператор і  - && -
console.log(false && true ) // false 
console.log(true || true ) // true 




//оператор не - ! - 
console.log(!true) // false 
console.log(!false)//ture 



//оператор нульового злиття ??
// повертає значення першої смінної тілки якщо вона не null або undefined 
const a = 0
const b = 20

const resul_1  = a ?? b
//в результаті виведення змінної resul_1 виведеться значення змінної a = 0
















//JavaScript функции alert, prompt и confirm для взаимодействия с пользователем. Условия switch case.


// функція alert 
alert('привіт') // дозволяє вивести спливаюче вікно в браузері 



//функція promt 
const userAge =  prompt('скількти тобі років?', 18) // вікно з інформацією та стокою яка приймає значення 
if(18<=userAge){
    console.log('доступ дозволено')
}else{
    console.log('доступ заборонений!')
}


//функція confirm 

const readyAg = confirm("починаєм?") //має булевий тип значень та приймає оба окей або ні 

if(readyAg){
  console.log("починаємо!")  
}else{
    console.log('окей, зачикаємо...')  
}


//функція swich case 

const age_4 = +prompt('скільки тобі років ?', 18)

switch (age_4) {
    case 18:{
console.log('Доступ дозволено')
        break;
    }

    case 10000:{
        console.log("вампірам вхід заборонений ")
        break;
    }

    default:{
console.log(`твій вік: ${age_4}`)
        break;
    }
}













//ЦИКЛИ 

//WHILE 
let count_45 = 0;

while(count_45<10){
console.log(count_45)
count_45++;
}


//DO WHILE 
let count55 = 1000;

do{
console.log(count55)
count55++
} while(count55< 10)


//FOR 
for(let i = 0; i < 4; i++){
alert(i)
}



















//ФУНКЦІЇ 

function logHello(/*параметр функції*/) {    // - декларування функції 
console.log ("Gggbgffgb!") //- тіло функції 
}

logHello(/* аргументи функції */)   // виклик функції 


//ПОВЕРНЕННЯ ЗНАЧЕННЯ ФУНКЦІЇ 

function sum(a, b) {
    return a + b;   //ключове слово return 
}















//ВИДИ ОБЯВЛЕННЯ ФУНКЦІЙ 


//стандарттне декларування 

function name(/*аргументи функції */ ) {
    return a+b;//значення 
}




//function expression

const logHello = function () {
    console.log('gh');
}



//Arrow function

const logHelloQ = (/*параметр*/) =>{
    console.log('ffdbd')  // тіло 
}

//особливістю стрілочної функції arrow function є неявне повернення із функціії. це доволяє сменшити написання тіла функції(вичеслення)
//приклад:

const logHell = (a , b ) => a+b 

console.log(sum(1, 2) )













//ОБ'ЄКТИ 

const firstObject = {}               //
                                    //   // снтатксис написання об'єкта 
const secodObject =  new Object()  //  



//в середені фігурних дужок обєкт представля набір властивостей 

const person = {
  name: "Іван",
  age: 25,
  isStudent: true, 
  sayHi: () => console.log('Hello'),  //функцію в середені об'єкту називають "МЕТОДОМ"
};


//отримати любу властивість об'єкта можна наступним чином:

console.log(person.age)
//або 
console.log(person['name'])


//щоб викликати метод об'єкту потрібно прописати:
person.sayHi()