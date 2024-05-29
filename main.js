//Arithmetic,operators,template literals and Backtick
function calculation(num1,num2)
{
  alert(`${num1} - ${num2} = ${num1 - num2}`);
}



//concatenates
function concatenates(name,da)
{
    alert('My name is ' + name + " i'm " + da + ' years old');
}





//typeof
function TYPE()
{
  let name = 'cabaas';
  alert(`the data type of name is ${typeof name}`);
}




//binary operators
function binary_ope()
{
    alert(`console.log(- (10 - 2)) the result is ${- (10 - 2)}`);
}




//Boolean and Comparison
function Boolean_com()
{
  let da = 20;
  let num1 = 9;
  alert(`console.log(da > num1) the result is ${da > num1}`);
}




//Logical operators
function Logical_op()
{
  let num2 = 223;
  let num1 = 76;
    alert(`consol.log(num1 == 54 && num2 != 2) the result is ${num1 == 54 && num2 != 2}`);
}





//Automatic type conversion
function Automatic_con()
{
    alert(`console.log('34' ** 12) the result is ${'34'**12}`);
}






//Short-circuiting of logical operators
function Short_circuiting()
{
  let num2 = 223;
  let name = 'cabass';
  alert(`console.log(num2 || name) the result is ${num2 || name}`);
}








//make function to calculate age
function $AgeCalculator()
{
  //ask the user to enter his/her age
  var Age = Number(prompt('Enter your age it should btw 1-100'));
  //while loop
  while (Age <= 0 || Age > 120 || isNaN(Age)) {
    alert('your should be enter number btw 1-100');
    Age = Number(prompt('please enter your age'));
  }
  
  alert(`you age is ${Age * 12}months,${Age * 52}weeks, ${Age * 365}days, ${Age *8760}hours, ${Age * 525600}minits and ${Age * 3.154e7}seconds`);
  
}//end





// program for a simple calculator

function $Calculator()
{
  let result;
  let ope = ['+','-','*','/'];

  //ask to enter num1,num2 and ope
  let number1 = Number(prompt('Enter first number: '));
  //Num1 condition
  while(isNaN(number1)){
    number1 = Number(prompt('Please enter first number: '));
  }

  let operator = prompt('Enter operator ( either +, -, *,/)');
  //operator condition
  while(operator != ope[0] && operator != ope[1] && operator != ope[2] && operator != ope[3]){
    operator = prompt('please enter only operator (+, -, *,/ )');
  }

  let number2 = Number(prompt('Enter second number: '));
  //Num2 condition
  while(isNaN(number2)){
    number2 = Number(prompt('Please enter second number: '));
  }
  
  //calculation
  if (operator == '+') {
    result = number1 + number2;
  }
  else if (operator == '-') {
    result = number1 - number2;
  }
  else if (operator == '*') {
    result = number1 * number2;
  }
  // display the result
  alert(`${number1} ${operator} ${number2} = ${result}`);
}//end




//$Num_to_Months
function $Num_to_Months()
{
  let num = Number(prompt('Enter number btw 1-12'));
 
  while(isNaN(num) || num < 1 || num > 12){
    alert('please enter only number btw 1-12');
    num = Number(prompt('please enter number btw 1-12'));
  }
  //use if,else if and else to display month that number stand for 
  if (num == 1) {
    alert('January');

  } else if (num == 2) {
    alert('February');

  } else if (num == 3) {
    alert('March');

  } else if (num == 4) {
    alert('April');

  } else if (num == 5) {
    alert('May');

  } else if (num == 6) {
    alert('June');

  } else if (num == 7) {
    alert('July');

  } else if (num == 8) {
    alert('August');
     
  } else if (num == 9) {
    alert('September');
 
  } else if (num == 10) {
    alert('October');
     
  } else if (num == 11) {
    alert('November');
     
  } else if (num == 12) {
    alert('December');     
  }
  
}//end





function $Your_Day()
{
  //use promt to display the menu and to ask to choose
  let choose = Number(prompt('please chose the menu                                                                       1)4:10     2)6:30      3)12:30      4)15:30      5)18:00       6)19:30      0)break'));

  while(isNaN(choose) || choose < 0 || choose > 6){
    choose = Number(prompt('please chose the menu                                                                       1)4:10     2)6:30      3)12:30      4)15:30      5)18:00       6)19:30      0)break'));
  }
  
  if (choose == 1) {
    alert('waxaan soo kacaa 3:40pm-4:00pm subaxnimo marka ay saacadu ku beegan tahay 4:10 subaxnimo waxaan aada mas jid ka si aan utu kado salaada subax');
  }
  if (choose == 2) {
    alert(
    `when it is 6:30 Am in the morning I have breakfast and then I go to the university`
    );
  }
  if (choose == 3) {
    alert(
      `When it's 12:30 pm, I do this at noon and then I have lunch..`
    );
  }
  if (choose == 4) {
    alert(
      `marka ay saacada ku beegan tahay 15:30 galab nimo waxan tu kadaa casir kadibna hoosha iitaalo baan iska qabtaa.`
    );
  }
  if (choose == 5) {
    alert(
      `marka ay saacada ku beegan tahay 18:00 habeyn nimo waxan tu kadaa makhrib kadibna hoosha iitaalo baan iska qabtaa.`
    );
  }
  if (choose == 6) {
    alert(
      `marka ay saacada ku beegan tahay 19:30 habeyn nimo waxan tu kadaa cisho kadibna waan casheeyaa, saacado kadibna waan iska sex daa hal ama labo saac kadib.`
    );
  }
  if(choose == 0 || choose == ''){
    alert('Good bye');
  }
}//end





//grade
function $Grade() {
  let Num = Number(prompt('Enter your points and it must be between 0-100'));
  //condition
  while (isNaN(Num) || Num < 0 || Num > 100 || Num == '') {
    alert('The points you entered are wrong, try again');
    Num = Number(prompt('Please enter points and it must be between 0-100'));
  }

  if (Num <= 100 && Num >= 90) {
    alert('Your grade is A');

  }
  else if (Num <= 89 && Num >= 80) {
    alert('Your grade is B');

  }
  else if (Num <= 79 && Num >= 70) {
    alert('Your grade is C');

  }
  else if (Num <= 69 && Num >= 60) {
    alert('Your grade is D');
  }
  else if (Num <= 59 && Num >= 50) {
    alert('Your grade is E');
  }
  else if (Num <= 49 && Num >= 0) {
    alert('Your grade is F');
  }
}//end




//multiplication
function $Multiplication() {
  console.clear();
  //ask to enter number to make it mult table
  let num = Number(prompt('enter number to make mult table'));
  while(isNaN(num) || num == ''){
    num = Number(prompt('Please enter only number to make mult table'));
  }
  var result = 'x';
  for (var colum = 0; colum <= num; colum++) {
    for (var row = 0; row <= num; row++) {
      if (colum == 0 && row > 0) {
        result += '\t' + row;
        // result value contain here x and row(num.values)
      }
      else if (row == 0 && colum > 0) {
        result += colum + '\t';
        //result value contain here x, row(num.values) and colum(num.values)
      }
      else if (colum > 0 && row > 0) {
        result += (colum * row) + '\t';
        //result value contain here x, row(num.values),colum(num.values) and (colum * row)
      }
    }
    result += '\n'
  }

  console.log(result);
}//end




function $one_to_hundred()
{
  console.clear();
    //while loop
    let number = 1;
    while (number <= 100)
    {
        console.log(number);
        number += 1;
    }
    
    console.log('the while loop end here and for loop begin here');

    //for loop
    for (let num = 1; num <= 100; num++)
    {
        console.log(num);
    }
}//end





function $hundred_to_one()
{
  console.clear();
    let number = 100;
    //while loop
    while (number >= 1)
    {
        console.log(number);
        number -= 1;
    }

    console.log('the while loop end here.');

    //for loop
    for (let num = 100; num >= 1; num--)
    {
        console.log(num);
    }
}//end




//$MarksCalculator
function $MarksCalculator()
{
  let total = 0;
  //enter 5 subjects using loop
  for (let i = 1; i <= 5; i++) {
    let subject = Number(prompt(`enter sub${i} marks`));
    while (isNaN(subject) || subject < 0 || subject > 100 || subject == '') {
      alert('please enter only number btw 0-100');
      subject = Number(prompt(`please enter sub${i} marks`));
    }
    total += subject;
  }

  let pre = parseInt(total / 5);
  //use swich

  switch (true) {
    case (pre <= 100 && pre >= 90):
      alert(`the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is A`);
      break;
    case (pre <= 89 && pre >= 80):
      alert(`the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is B`);
      break;
    case (pre <= 79 && pre >= 70):
      alert(`the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is C`);
      break;
    case (pre <= 69 && pre >= 60):
      alert(`the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is D`);
      break;
    case (pre <= 59 && pre >= 0):
      alert(`the total of 5 subjects are ${total}, the pracentage is ${pre}% and your grade is F`);
      break;; 
  }
    

}//end





//break
function $Break(){
  console.clear();
  for(let count = 1; count <=5; count++){
    let ask = prompt('Enter cabaas to break the program or something else to print it in console');
    if(ask == 'cabaas') {
      break;
    }
    console.log(`${count}. ${ask}`);
  }
}//end




//CONT
function $Continue()
{
  console.clear();
    for (let i = 1; i <= 5; i++) {
        let name = prompt('enter cabaas to continue or some thing else to print it');
        if (name == 'cabaas') {
            continue;
        }
        console.log(`${i}. ${name}`);
    }

}//end





//form
function Show_Value() {
  let magac = document.getElementById('magac').value;
  let fasal = document.getElementById('class').value;
  let id= document.getElementById('id').value;
  let result = `My name is ${magac} i'm in class ${fasal} and my id is ${id}`;
  document.getElementById('text').innerHTML = result;
}//end






//Sum of all number
function $Sum_number(){
  console.clear();
  var num = [180,20,-3];
  console.log(num[0]+num[1]+num[2]);
}



//Average
function $Average(){
  console.clear();
  num = [67,89,45];
  console.log((num[0]+num[1]+num[2]) / num.length);
}

 
//Average
/*const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);*/



//Maximum value & Minimum value 
function $min_max(){
  console.clear();
  console.log(166,90,876,78);
  //max
  let max = Math.max(166,90,876,78);
  let min = Math.min(166,90,876,78);
  console.log('The max number is '+max + ' and the min is '+min);
}




//Splice Function 
function $Splice(){
  console.clear();
  var Cars = ['BMW','Honda Civic','Tesla'];
  console.log(Cars);
  // At position 0, add 2 elements:
  Cars.splice(0,0, 'Genesis G80','Chevrolet Malibu');
  console.log(Cars);
}//end






//anfac
function $Anfac(){
  console.clear()
  let blance = 100;
  alert(`Kusoo dhawaaw adeega anfac,Haraaga EVC-PLUS waa ${blance}.`);

  //functions
  //anfac menue
  function anfac(){
    console.log('ADEGA ANFAC');
    console.log('1.ANFAC Gudaha');
    console.log('2.ANFAC Gudaha iyo Dibadda');
    console.log('3.ANFAC Dibadda 32 dal');
    console.log('4,ANFAC SMS');
    console.log('0.Exit');

  }
  //choose
  let option;
  //choose function
  function choose(){
    while(isNaN(option)  || option < 0 || option > 4)
    {
      option = Number(prompt('choose one option'));
    }
  }
  //coose 2
  let cho;
  function choose2(){
    while(isNaN(cho)  || cho < 1 || cho > 2)
    {
      cho = Number(prompt('choose one option'));
    }
  }
  
  //ask to enter anfac code
  let pin = Number(prompt('Enter Anfac code (127)'));
  while(isNaN(pin) || pin != 127){
    alert('your entered wrong code.');
   pin = Number(prompt('Enter Anfac code (127)'))
  }
  

  if(pin == 127){
    //call anfac function
    anfac();

    //ask to choose
    option = Number(prompt('choose one option'));
    //choose con
    choose();

    function conditions()
    {
      if(option == 1){
        console.clear()
        console.log('Fadlan dooro Xirmo:');
        console.log('1.Xirmo USD1');
        console.log('2.Xirmo USD5');
        console.log('3.Xirmo USD10');
        console.log('4.Xirmo USD20');
        console.log('0.Back');

        //ask to choose
        option = Number(prompt('choose one option'));
        //choose con
        choose();

        if(option == 1){
          console.clear();
          console.log('Waxaad helaysaa 100 daqiiqo wicitaanka gudaha.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 100 daqiiqo wicitaanka gudaha. Haraaga EVC-PLUS waa ${blance-1}`);
          }

        }

        else if(option == 2){
          console.clear();
          console.log('Waxaad helaysaa 750 daqiiqo wicitaanka gudaha.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 750 daqiiqo wicitaanka gudaha. Haraaga EVC-PLUS waa ${blance-5}`);
          }
        }

        else if(option == 3){
          console.clear();
          console.log('Waxaad helaysaa 2000 daqiiqo wicitaanka gudaha.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 2000 daqiiqo wicitaanka gudaha. Haraaga EVC-PLUS waa ${blance-10}`);
          }
        }

        else if (option == 4){
          console.clear();
          console.log('Waxaad helaysaa 5000 daqiiqo wicitaanka gudaha.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 5000 daqiiqo wicitaanka gudaha. Haraaga EVC-PLUS waa ${blance-20}`);
          }
        }

        else if(option == 0){
          console.clear();
          //call anfac function
          anfac();

          //ask to choose
          option = Number(prompt('choose one option'));
          //choose con
          choose();

          //call main condition
          conditions();
        }
      }

      else if(option == 2){
        console.clear()
        console.log('Fadlan dooro Xirmo:');
        console.log('1.Xirmo USD5');
        console.log('2.Xirmo USD10');
        console.log('3.Xirmo USD20');
        console.log('4.Xirmo USD50');
        console.log('0.Back');

        //ask to choose
        option = Number(prompt('choose one option'));
        //choose con
        choose();

        if(option == 1){
          console.clear();
          console.log('Waxaad helaysaa 300 daqiiqo wicitaanka gudaha,200SMS gudaha,6 daqiiqo wicitaanka dibada,2SMS dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 300 daqiiqo wicitaanka gudaha,200SMS gudaha,6 daqiiqo wicitaanka dibada,2SMS dibada. Haraaga EVC-PLUS waa ${blance-5}`);
          }

        }

        else if(option == 2){
          console.clear();
          console.log('Waxaad helaysaa 600 daqiiqo wicitaanka gudaha,200SMS gudaha,18 daqiiqo wicitaanka dibada,5SMS dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 600 daqiiqo wicitaanka gudaha,200SMS gudaha,18 daqiiqo wicitaanka dibada,5SMS dibada. Haraaga EVC-PLUS waa ${blance-10}`);
          }
        }

        else if(option == 3){
          console.clear();
          console.log('Waxaad helaysaa 900 daqiiqo wicitaanka gudaha,200SMS gudaha,40 daqiiqo wicitaanka dibada,10SMS dibada..Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 900 daqiiqo wicitaanka gudaha,200SMS gudaha,40 daqiiqo wicitaanka dibada,10SMS dibada. Haraaga EVC-PLUS waa ${blance-20}`);
          }
        }

        else if (option == 4){
          console.clear();
          console.log('Waxaad helaysaa 2000 daqiiqo wicitaanka gudaha,500SMS gudaha,200 daqiiqo wicitaanka dibada,150SMS dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 2000 daqiiqo wicitaanka gudaha,500SMS gudaha,200 daqiiqo wicitaanka dibada,150SMS dibada. Haraaga EVC-PLUS waa ${blance-50}`);
          }
        }

        else if(option == 0){
          console.clear();
          //call anfac function
          anfac();

          //ask to choose
          option = Number(prompt('choose one option'));
          //choose con
          choose();

          //call main condition
          conditions();
        }
      }

      else if(option == 3){
        console.clear()
        console.log('Fadlan dooro Xirmo:');
        console.log('1.Xirmo USD5');
        console.log('2.Xirmo USD10');
        console.log('3.Xirmo USD20');
        console.log('4.Xirmo USD50');
        console.log('0.Back');

        //ask to choose
        option = Number(prompt('choose one option'));
        //choose con
        choose();

        if(option == 1){
          console.clear();
          console.log('Waxaad helaysaa 30 daqiiqo wicitaanka dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 30 daqiiqo wicitaanka dibada. Haraaga EVC-PLUS waa ${blance-5}`);
          }

        }

        else if(option == 2){
          console.clear();
          console.log('Waxaad helaysaa 60 daqiiqo wicitaanka dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 60 daqiiqo wicitaanka dibada. Haraaga EVC-PLUS waa ${blance-10}`);
          }
        }

        else if(option == 3){
          console.clear();
          console.log('Waxaad helaysaa 90 daqiiqo wicitaanka dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 90 daqiiqo wicitaanka dibada. Haraaga EVC-PLUS waa ${blance-20}`);
          }
        }

        else if (option == 4){
          console.clear();
          console.log('Waxaad helaysaa 120 daqiiqo wicitaanka dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 120 daqiiqo wicitaanka dibada. Haraaga EVC-PLUS waa ${blance-20}`);
          }
        }

        else if(option == 0){
          console.clear();
          //call anfac function
          anfac();

          //ask to choose
          option = Number(prompt('choose one option'));
          //choose con
          choose();

          //call main condition
          conditions();
        }
      }

      else if(option == 4){
        console.clear()
        console.log('Fadlan dooro Xirmo:');
        console.log('1.Xirmo 50 Cent Gudaha');
        console.log('2.Xirmo USD1 Gudaha');
        console.log('3.Xirmo 50 Cent Dibada');
        console.log('4.Xirmo USD1 Dibada');
        console.log('0.Back');

        //ask to choose
        option = Number(prompt('choose one option'));
        //choose con
        choose();

        if(option == 1){
          console.clear();
          console.log('Waxaad helaysaa 80 SMS gudaha.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 80 SMS gudaha. Haraaga EVC-PLUS waa ${blance-0.5}`);
          }

        }

        else if(option == 2){
          console.clear();
          console.log('Waxaad helaysaa 200 SMS gudaha.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 200 SMS gudaha. Haraaga EVC-PLUS waa ${blance-1}`);
          }
        }

        else if(option == 3){
          console.clear();
          console.log('Waxaad helaysaa 5 SMS dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 5 SMS dibada. Haraaga EVC-PLUS waa ${blance-0.5}`);
          }
        }

        else if (option == 4){
          console.clear();
          console.log('Waxaad helaysaa 20 SMS dibada.Fadlan hubi isdiieangalintaada:');
          console.log('1.Maya');
          console.log('2.Haa');

          //ask to choose
          cho = Number(prompt('choose one option'));
          //call choose 2
          choose2();

          if(cho == 1){
            console.clear();
            console.log('Waad kuguuleysatay in aad iska joojiso howshaan');
          }
          else{
            console.clear();
            console.log(`Waad kuguuleysatay 20 SMS dibada. Haraaga EVC-PLUS waa ${blance-1}`);
          }
        }

        else if(option == 0){
          console.clear();
          //call anfac function
          anfac();

          //ask to choose
          option = Number(prompt('choose one option'));
          //choose con
          choose();

          //call main condition
          conditions();
        }
      }

      else{
        console.clear();
        alert('Macsalaamo');
      }
    }
    conditions();
    
  }
  
  
}