const decimal = 
      document.getElementById("decimal");
const clear =
      document.getElementById("clear");

const displayValElement =
      document.getElementById("display-result");

const digit =
      document.getElementsByClassName("digit");

const operators = 
      document.getElementsByClassName("operator");



var displayVal = '0';
var pendingVal;
var evalStringArray = [];

updateDisplay = (e) => {
    var text = e.target.innerText;
    if(displayVal === "0"){
        displayVal = ""
    }
    
    displayVal += text;
    displayValElement.innerText = displayVal;
}

performOperation = (e) => {
    var operator = e.target.innerText;
    



    switch (operator){
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            
        evalStringArray.push(pendingVal);
            evalStringArray.push('+');
             break;
        case '-':
            pendingVal = displayVal;
            displayVal= '0';
            displayValElement.innerText = displayVal;
            
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
            
            case '×':
            pendingVal = displayVal;
            displayVal= '0';
            displayValElement.innerText = displayVal;
            
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
            
            case '÷':
            pendingVal = displayVal;
            displayVal= '0';
            displayValElement.innerText = displayVal;
            
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
            
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            // convert datatype from number to string
            displayVal = evaluation + ''; 
            console.log(typeof displayVal);
            displayValElement.innerText = displayVal;
            evalStringArray = []; // clear the array
            break;
        default:
            break;
    }
}

for (let i = 0; i < digit.length; i++)
    {
        
        digit[i].addEventListener('click',  updateDisplay)
        
    }

for(let i = 0; i < operators.length; i++)
    {
        operators[i].addEventListener('click',  performOperation);
    }

clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

decimal.onclick = () => { 
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}
