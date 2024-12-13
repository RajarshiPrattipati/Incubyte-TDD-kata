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
