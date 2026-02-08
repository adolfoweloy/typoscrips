// Intersection types — a value must satisfy ALL types at once
// Unlike unions (A | B) where a value is one or the other,
// an intersection (A & B) requires the value to have everything from both.

type HasName = {
  name: string;
};

type HasAge = {
  age: number;
};

// Person must have both name AND age — you can access all members directly
type Person = HasName & HasAge;

const alice: Person = {
  name: "Alice",
  age: 30,
};

// No narrowing needed — both fields are guaranteed to exist
console.log(`${alice.name} is ${alice.age} years old`);

// Intersections compose — keep stacking more requirements
type HasEmail = {
  email: string;
};

type Employee = Person & HasEmail;

// Must satisfy Person (name + age) AND HasEmail
const bob: Employee = {
  name: "Bob",
  age: 25,
  email: "bob@example.com",
};

// All three fields are directly accessible
console.log(`${bob.name} (${bob.email}) is ${bob.age} years old`);

// A function that requires an intersection gets full access to all members
function introduce(employee: Employee) {
  console.log(
    `Hi, I'm ${employee.name}, ${employee.age}, reach me at ${employee.email}`,
  );
}

introduce(bob);
