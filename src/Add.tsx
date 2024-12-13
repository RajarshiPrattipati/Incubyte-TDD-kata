/* Adds elements in a string, allowed characters are : 
    1,2,3, .... 1000 are variables
    `\n` & `'` are delimiters

    Supports custom delimiters. eg, //;\n1;2
*/
const add = (numbers: String = ""): number | Error => {
  let temp = "";
  let delimiter = ",";
  let sum = 0;
  let i = 0;
  let negatives = [];
  if (numbers.slice(0, 2) === "//") {
    delimiter = numbers[2];
    i = 3;
  }
  for (; i < numbers.length || temp.length; i++) {
    if ([delimiter, "\n"].includes(numbers[i]) || i === numbers.length) {
      const num = parseInt(temp);
      //   console.log("num", num);
      if (num < 0) negatives.push(num);
      else if (num > 1000) {
      } else sum += num;
      temp = "";
    } else temp = temp.concat(numbers[i]);
  }
  if (negatives.length)
    return Error(`Negative number(s) ${negatives} not allowed`);
  else return sum;
};

export default add;
