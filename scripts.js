// manipulate number
let numCalculate = document.getElementsByClassName('calculate'); // => return value as array
let numResult = document.getElementsByClassName('numresult');

// menata array button berdasarkan name, untuk melakukan forEach, ketika diklik lakukan sesuatu
const buttonNum = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const bNum = buttonNum.map(name => document.getElementsByName(name)[0]);

const buttonOperate = ['+', '-', '*', '/'];
const bOperate = buttonOperate.map(name => document.getElementsByName(name)[0]);

// set bilangan pertama dengan 0
numResult[0].innerHTML = 0;
let start = true;
let num = '';

bNum.forEach((button, index) => {
  button.addEventListener('click', () => {
    // pengecekan untuk menghilangkan angka 0 diawal atau menggantikan menjadi angka baru
    if(start) {
      numResult[0].textContent = index;
      start = false;
    } else {
      num = numResult[0].textContent += index;
    }
    num = numResult[0].textContent;
  });
});

let operate = '';
let prevNum = '';

bOperate.forEach(button => {
  button.addEventListener('click', () => {
    operate = button.name;
    prevNum = numResult[0].textContent;
    start = true; //menghilangkan atau mengganti angka untuk angka berikutnya
  });
});

const equalsButton = document.querySelector('button[name="="]');
equalsButton.addEventListener('click', () => {
  
  let result;

  const currNum = numResult[0].textContent;

  switch (operate) {
    case '+':
      result = parseFloat(prevNum) + parseFloat(currNum);
      break;
    case '-':
      result = parseFloat(prevNum) - parseFloat(currNum);
      break;
    case '*':
      result = parseFloat(prevNum) * parseFloat(currNum);
      break;
    case '/':
      result = parseFloat(prevNum) / parseFloat(currNum);
      break;
    default:
      return;
  }

  numResult[0].textContent = result;

});

const reset = document.querySelector('button[name="clean"]');
reset.addEventListener('click', () => {
  start = true;
  numResult[0].innerHTML = 0;
});