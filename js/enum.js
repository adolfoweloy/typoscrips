/* eslint-disable no-undef */
// this is an example to show how regular enums,
// opposed to inlined enums with const, actually get defined in JS after transpiled.
var Color;
(function (Color) {
  Color[(Color.Red = 0)] = "Red";
  Color[(Color.Green = 1)] = "Green";
})(Color || (Color = {}));

console.log(Color);
