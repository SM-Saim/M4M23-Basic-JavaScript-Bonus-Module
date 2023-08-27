// function numbers(num1, num2) {
//   console.log(num1, num2);
// }
// numbers(22, 33, 44, 55, 66, 77, 88, 99);

function numbers(num1, num2) {
  console.log(arguments);
  console.log(arguments[2]);
}
numbers(22, 33, 44, 55, 66, 77, 88, 99);
