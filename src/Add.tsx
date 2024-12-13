/* Adds elements in a string, allowed characters are : 
    1,2,3, .... 1000 are variables
    `\n` & `'` are delimiters

    Supports custom delimiters. eg, //;\n1;2
*/
const add = (numbers: String = ""): number => {
  let temp = "";
  let delimiter = ",";
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log("numbers[i]: ", numbers[i]);
    if ([delimiter, "\n"].includes(numbers[i])) {
      if (parseInt(temp)) sum += parseInt(temp);
      else throw new Error("No value present before delimiter");
      temp = "";
    } else temp = temp.concat(numbers[i]);
  }
  return temp === "" ? sum : sum + parseInt(temp);
};

export default add;
