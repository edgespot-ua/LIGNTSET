
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