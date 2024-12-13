import add from "./Add";

// test("empty string", () => {
//   expect(add()).toBe(0);
// });

// test("1", () => {
//   expect(add("1")).toBe(1);
// });

// test("2", () => {
//   expect(add("2")).toBe(2);
// });

// test("2,5", () => {
//   expect(add("2,5")).toBe(7);
// });

// test("2,2,9,11,23,40", () => {
//   expect(add("2,2,9,11,23,40")).toBe(87);
// });

// test("2,2\n4", () => {
//   expect(add("2,2\n4")).toBe(8);
// });

// test("//[;]\n2;4", () => {
//   expect(add("//[;]\n2;4")).toBe(6);
// });

// test("//[;]\n2;4;6;8", () => {
//   expect(add("//[;]\n2;4;6;8")).toBe(20);
// });

// test("-1,2", () => {
//   expect(add("-1,2")).toEqual(Error("Negative number(s) -1 not allowed"));
// });

// test("-1,-2,-3", () => {
//   expect(add("-1,-2,-3")).toEqual(
//     Error("Negative number(s) -1,-2,-3 not allowed")
//   );
// });

// test("1,1001", () => {
//   expect(add("1,1001")).toBe(1);
// });

test("//[***]\n1***3", () => {
  expect(add("//[***]\n1***3")).toBe(4);
});
