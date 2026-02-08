// With a proper type, TypeScript knows what methods are available
const typed: string = "hello";
console.log(typed.toUpperCase()); // OK — TypeScript knows this is a string

// With `any`, TypeScript won't complain about anything — even things that will crash at runtime
const untyped: any = "hello";
console.log(untyped.toUpperCase()); // OK — works because the value is actually a string
// console.log(untyped.foo.bar); // No compile error! But crashes at runtime: foo is undefined

const a: any = 3;
const b: any = [1];
const c: any = a + b;
console.log(c); // "31"

console.log(typeof a); // "number"
console.log(typeof b); // "object"
console.log(typeof c); // "string"

// let test: true = true;
// test = false;

let obj: { name: string };

obj = { name: "Alice" };
obj = { name: "Bob" };

console.log(`obj is ${obj}`);

// type aliases
type Age = number;
type Human = {
  name: string;
  age: Age;
};

const anne: Human = {
  name: "Anne",
  age: 40,
};

console.log(`This is ${anne.name} and she is ${anne.age}`);
