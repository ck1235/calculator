/**
 * @author: Charita K
 */

const btn0 = document.getElementById('zero');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');
const btnAC = document.getElementById('allClear');
const btnClear = document.getElementById('clear');
const btnEqual = document.getElementById('equals');
const btnAdd = document.getElementById('plus');
const btnSub = document.getElementById('minus');
const btnMult = document.getElementById('times');
const btnDiv = document.getElementById('divSign');
const btnDecimal = document.getElementById('dot');
const btnSign = document.getElementById('sign');
const btnPercent = document.getElementById('percent');


let strInput = document.querySelector('.outputDisplay')
let strOutput = '';
let input = 0;
let lastValue = 0;
let operation = '';

/**
 * Displays current number
 * @param {string} digit to be added to number
 */
function display(value){
	if(input.length >= 12){
		strInput.innerHTML = "TooMuchInput";
	} else {
		strInput.innerHTML = value;
		strOutput = strOutput + value;
		input = strOutput;
		strInput.innerHTML = input;
	}
	// console.log(" strInput: " + strInput.innerHTML + ", input: " + input + ", lastValue: " + lastValue + ", strOutput: " + strOutput + ", value: " + value);
}

/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} lastValue
 */
function add(a, b){
	lastValue = a + b;
	return lastValue;
}

/**
 * Returns the difference of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} lastValue
 */
function subtract(a, b){
	lastValue = a - b;
	return lastValue;
}

/**
 * Returns the product of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} lastValue
 */
function multiply(a, b){
	lastValue = a * b;
	return lastValue;
}

/**
 * Returns the quotient of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} lastValue
 */
function divide(a, b){
	lastValue = a / b;
	return lastValue;
}

/**
 * Deletes most recent digit
 */
function deleteDigit(){
    if (input == '' || input.length <= 1){
    	input = 0;
    	strInput.innerHTML = input;
    } else {
    	let x = input.length;
		input = input.substring(0, x-1);
		strInput.innerHTML = input;
		strOutput = '';    	
	}
	// console.log(" strInput: " + strInput.innerHTML + ", input: " + input + ", lastValue: " + lastValue + ", strOutput: " + strOutput);

}

/**
 * Clears all numbers and operations (reset)
 */
function allClear(){
	strInput.innerHTML = 0;
	input = 0;
	strOutput = '';
	operation = '';
	lastValue = 0;
}

/**
 * Changes sign of current number
 */
function sign(){
	if(input == 0){
		lastValue = 0 - lastValue;
		strInput.innerHTML = lastValue;
	} else {
		input = '-' + input;
		strInput.innerHTML = input;
	}
}

/**
 * Adds decimal point to current number
 */
function decimal(){
	if(input === 0){
		display('0.');
	} else if (input.indexOf('.') == -1) {
		display('.');
	}
}

/**
 * Displays percent value of current number
 */
function percent(){
	input = input / 100;
	strInput.innerHTML = input;
}

/**
 * Performs the appropriate operation and displays the result
 */
function equate(){
	input = parseFloat(input);
	lastValue = parseFloat(lastValue);
	switch(operation){
		case "+":
			add(lastValue, input);
			break;
		case "-":
			subtract(lastValue, input);
			break;
		case "*":
			multiply(lastValue, input);
			break;
		case "÷":
			divide(lastValue, input);
			break;	
	}
	strInput.innerHTML = parseFloat(lastValue.toFixed(2));
	lastValue = parseFloat(lastValue.toFixed(2));

	if(lastValue.toString().length >= 12){
		strInput.innerHTML = "TooMuchInput";
	}

	operation = '';
	input = 0;
	strOutput = '';
}

function buttons(){
	btn0.addEventListener('click', function() {display('0')});
	btn1.addEventListener('click', function() {display('1')});
	btn2.addEventListener('click', function() {display('2')});
	btn3.addEventListener('click', function() {display('3')});
	btn4.addEventListener('click', function() {display('4')});
	btn5.addEventListener('click', function() {display('5')});
	btn6.addEventListener('click', function() {display('6')});
	btn7.addEventListener('click', function() {display('7')});
	btn8.addEventListener('click', function() {display('8')});
	btn9.addEventListener('click', function() {display('9')});
	btnClear.addEventListener('click', function() {deleteDigit()});
	btnAC.addEventListener('click', function() {allClear();})
	btnSign.addEventListener('click', function() {sign();})
	btnEqual.addEventListener('click', function() {equate();})
	btnPercent.addEventListener('click', function() {percent();})
	btnDecimal.addEventListener('click', function() {decimal();})

	btnAdd.addEventListener('click', function() {
		if(operation != ''){
			equate();
			strInput.innerHTML = lastValue + " + ";
			input = lastValue;
		}
		if (lastValue == 0){
			lastValue = input;
		}
		operation = '+';
		input = 0;
		strOutput = "";
	});

	btnSub.addEventListener('click', function() {
		if(operation != ''){
			equate();
			strInput.innerHTML = lastValue + " - ";
			input = lastValue;
		}
		if (lastValue == 0){
			lastValue = input;
		}
		operation = '-';
		input = 0;
		strOutput = "";
	});

	btnMult.addEventListener('click', function() {
		if(operation != ''){
			equate();
			strInput.innerHTML = lastValue + " * ";
			input = lastValue;
		}
		if (lastValue == 0){
			lastValue = input;
		}
		operation = '*';
		input = 0;
		strOutput = "";
	});
	
	btnDiv.addEventListener('click', function() {
		if(operation != ''){
			equate();
			strInput.innerHTML = lastValue + " ÷ ";
			input = lastValue;
		}
		if (lastValue == 0){
			lastValue = input;
		}
		operation = '÷';
		input = 0;
		strOutput = "";
	});
}


buttons();
