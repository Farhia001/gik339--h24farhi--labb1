/* Uppgift 2 - Variabler och scope */

let fname = 'Farhia';
var lname = 'Hilowle';
const age = 21;

{
    let fname = 'Maria';
    var lname = 'Alasow';
    const age = 22;
}

console.log(fname);
console.log(lname);
console.log(age);

/* Reflektion uppgift 2 */

/* 1. För let och const varibeln finns det möjlighet för den att endast exister i sitt block (Blockscope). 
      För var spelar det ingen roll om den finns inom ett block det kan fortfarande nås (global scope). */

/* 2. Om jag placera console.log() under block så skrivs för let och const de variblerna utanför 
      blocket. För var visas den nya värdet Alasow, för att den inte har blockscope. 

      Om jag lägger console.log() inom blocket visas de värden som finns inom blocket. 

      Och innan blocket visas alla värden utanför blocket. */




/*Uppgift 3 - Jämförelser och specialvärden*/

console.log(2=='2');
console.log(2==='2');

console.log(NaN === NaN);
console.log(null == undefined);
console.log(null === undefined);
 
console.log(undefined ? 'truthy': 'falsy');

/* Reflektion uppgift 3 */
/* 1. == gör typkonvertering, vilket betyder att JavaScript försöker omvandla värden
      till samma datatyp innan jämförelsen. Därför blir t.ex. 2 == "2" sant.
      === är strikt likhet, JavaScript jämför både värde och datatyp, utan att omvandla något.*/

/* 2. I både ternary operator och if-satser utvärderas uttrycket som en boolean.
      Det spelar ingen roll vad värdet är från början — JavaScript avgör om det är truthy eller falsy. */
      
/* 3. NaN står för "Not a Number" och används när en matematisk operation ger ett
      ogiltigt tal och är inte lika med något även sig själv. Undefined betyder att något saknar värde. T.ex. när en variabel är
      deklarerad men inte tilldelad. null är tomt värde. Används för att visa att en variabel ska vara tom eller inte innehåller något just nu.*/


/* Uppgift 4 - Funktioner */
let name = 'Sam'
    
function greet(name) {
    return 'Hej ' + name;
}
const greetValue = greet('Farhia');
console.log(greetValue);



/* Reflektion uppgift 4 */
/* 1. - Funktionsdeklaration så använder man ordet function och sedan namnet på funktion, man anropa innan funktion deklareras.
      - För funktionsuttryck har man en varibel med funktion som värde. Man kan inte anropa innan funktionen skapas
      - Arrowfunction är kortare formatering av funktion. Man kan inte heller anropa innan funktionen skapas.
       */
/* 2. För funktionsdeklartion så spelar det ingen roll om man anropar funktionen innan eller efter funktion
      skapats. */

/* 3. När jag anropar funktionen i 'name' let varibeln så händer det inget med funktionen.
      Om jag ändrar i parameter 'name' med värdet 'Farhia' till något annat anropas det istället. */

/* 4. Parameter är ett namn som används i funktionen inom parenteser som tar emot värde. 
      Argumenter är värdet som tas emot av funktionen när man anropar den.

      Och varibel är en namngivaren behållare för ett värde. */
