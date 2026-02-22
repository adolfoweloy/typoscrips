enum PaymentOption {
  BPay,
  CreditCard,
  Transfer,
}

type Payment = {
  amount: number;
  option: PaymentOption;
  description: string;
};

const p: Payment = {
  amount: 100.0,
  option: PaymentOption.CreditCard,
  description: "Telstra",
};

console.log(p);

// const inlines enums
// when declaring enums with const, TS replaces usages of the num with their values
const enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); // becomes console.log(0)
console.log(Color.Green); // becomes console.log(1)
