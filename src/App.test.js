import add from "./Add";

test("empty string", () => {
  expect(add()).toBe(0);
});

test("1", () => {
  expect(add("1")).toBe(1);
});

test("2", () => {
  expect(add("2")).toBe(2);
});

test("2,2", () => {
  expect(add("2,2")).toBe(4);
});

test("2,5", () => {
  expect(add("2,5")).toBe(7);
});

test("2,2,9,11,23,40", () => {
  expect(add("2,2,9,11,23,40")).toBe(87);
});
