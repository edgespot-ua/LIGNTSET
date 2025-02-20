




/* -----УМОВНІ ОПЕРАТОРИ----*/
var num_les5 = 15 ;


if(num_les5 != 15 ){
console.log("ok");
}

else if(num_les5<10){
console.log("qq");
}

else{
    console.log("erorr!");
}


/* --------------------------------------*/


var stroka = "word";

switch(stroka){

case "4": console.log("ППеременная со значениям 4");
break;


case "56": console.log("ППеременная со значениям 56");
break;

case "word": console.log("ППеременная со значениям word");
break;

default: console.log("default");
break;
}

/*------вспливаючі вінка ---*/
/*alert()
prompt()
confirm()*/





/*-----функції---------------------*/

function info(word){
    console.log(word +"!");
   
}
info("hello");




function summa(a, b){
var res = a + b;
console.log(res);
}
summa(2, 4);

   



function sumarr(arr){

    var sum = 0;

  for(var i = 0; i < arr.length; i++ ){

  sum+= array[i];
  }

  console.log(sum);
}

var array = [6,4,2];

sumarr(array);





