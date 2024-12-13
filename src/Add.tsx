/* Adds elements in a string, allowed characters are : 
    1,2,3, .... 1000 are variables
    `\n` & `'` are delimiters

    Supports custom delimiters. eg, //;\n1;2
*/

const getDelimiters = (s: string): string[] => {
  console.log("s", s);
  let dels = [];
  for (let i = 0; i < s.length; i++) {
    const i2 = s.indexOf("]", i);
    dels.push(s.slice(i + 1, i2));
    i = i2;
  }
  return dels;
};
const add = (numbers: string = ""): number | Error => {
  try {
    console.log(numbers);
    let temp = "";
    let delimiters = [","];
    let sum = 0;
    let i = 0;
    let negatives = [];
    if (numbers.slice(0, 2) === "//") {
      const indexOfSlash = numbers.search("\n");
      const searchString = numbers.slice(2, indexOfSlash);
      delimiters.push(...getDelimiters(searchString));
      i = indexOfSlash + 1;
    }
    for (; i < numbers.length || temp.length; i++) {
      if (
        [...delimiters, "\n"].some(
          (s) => numbers.slice(i, i + s.length) === s && (i += s.length - 1)
        ) ||
        i === numbers.length
      ) {
        const num = parseInt(temp);
        if (num < 0) negatives.push(num);
        else if (num > 1000) {
        } else sum += num;
        temp = "";
      } else temp = temp.concat(numbers[i]);
    }
    if (negatives.length)
      return Error(`Negative number(s) ${negatives} not allowed`);
    else return sum;
  } catch (err) {
    return Error(`Invalid string ${numbers}`);
  }
};

export default add;
