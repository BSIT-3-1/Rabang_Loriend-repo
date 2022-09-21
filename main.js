let x= 5;
let string = "";
 
function OddOrEven(numberChecker) {
//   // +, -, /, *, %
const Odd = numberChecker % 2 != 0;
    if (Odd) return console.log(`The number 
      ${numberChecker} is Odd`);
    
    else return console.log(`The number 
      ${numberChecker} is Even`);

    return console.log(`The number ${numberChecker} is
      ${numberChecker % 2 != 0 ? "Odd" : "Even"}.`)
}

OddOrEven(x);
for (let i = 0; i <= x; i++) 
  {
  for (let j = x; j > i; j--) {
    string += " ";
  }
  
  for (let k = 0; k < i * 2 - 1; k++) 
  {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= x - 1; i++) 
  {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = (x - i) * 2 - 1; k > 0;
       k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

