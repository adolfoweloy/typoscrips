// Union types — a value can be one of several types
type Status = "pending" | "active" | "disabled";

function printStatus(status: Status) {
  console.log(`Status is: ${status}`);
}

printStatus("active"); // OK
printStatus("pending"); // OK
// printStatus("unknown"); // Compile error — not in the union

// Union with different types
function format(value: string | number) {
  if (typeof value === "string") {
    // TypeScript narrows the type here — it knows value is a string
    console.log(value.toUpperCase());
  } else {
    // Here it knows value is a number
    console.log(value.toFixed(2));
  }
}

format("hello"); // "HELLO"
format(3.14159); // "3.14"

// for defined types
type Engineering = {
  programmingLanguage: "typescript" | "java" | "go";
  bestPractices: string;
};

type CompanyValues = {
  values: string[];
};

type Onboarding = Engineering | CompanyValues;

const devOnboarding: Onboarding = {
  programmingLanguage: "java",
  bestPractices: "declare variables before using",
  values: ["be the change you seek"],
};

console.log(devOnboarding);
