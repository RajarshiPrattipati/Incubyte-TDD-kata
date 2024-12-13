/* Adds elements in a string, allowed characters are : 
    1,2,3, .... 1000 are variables
    `\n` & `'` are delimiters

    Supports custom delimiters. eg, //;\n1;2
*/

const getDelimiters = (s: string): string[] => {
  let dels = [];
  for (let i = 0; i < s.length; i++) {
    const i2 = s.slice(i).indexOf("]");
    dels.push(s.slice(i + 1, i2));
    i += i2;
  }
  console.log("dels", dels);
  return dels;
};
const add = (numbers: string = ""): number | Error => {
  let temp = "";
  let delimiters = [","];
  let sum = 0;
  let i = 0;
  let negatives = [];
  if (numbers.slice(0, 2) === "//") {
    const indexOfSlash = numbers.search("\n");
    const searchString = numbers.slice(2, indexOfSlash);

    console.log("S", searchString, getDelimiters(searchString));
    // console.log("I", indexOfSlash, numbers[indexOfSlash + 1]);
    delimiters.push(...getDelimiters(searchString));
    i += indexOfSlash + 1;
  }
  for (; i < numbers.length || temp.length; i++) {
    console.log("numbers.slice(i, i + s.length)", numbers.slice(i), delimiters);
    if (
      [...delimiters, "\n"].some(
        (s) => numbers.slice(i, i + s.length) === s && (i += s.length - 1)
      ) ||
      i === numbers.length
    ) {
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
