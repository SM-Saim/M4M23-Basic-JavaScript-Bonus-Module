// for loop
// const numbers = [22, 33, 55, 6, 8, 36, 8, 34, 78];
// for (let i = 0; i < numbers.length; i++) {
//   const allSplit = numbers[i];
//   console.log(allSplit);
// }

// for of loop:
// for (const value of numbers) {
//   console.log(value);
// }

const moblieLists = [
  { name: "iphone", color: "black", price: 100000 },
  { name: "xaomi Phone", color: "white", price: 50000 },
  { name: "mac Book laptop", color: "black", price: 120000 },
  { name: "samsung phone", color: "silver", price: 62000 },
  { name: "nokia", color: "black", price: 40000 },
  { name: "pixel Phone", color: "black", price: 80000 },
  { name: "htc phone", color: "black", price: 60000 },
  { name: "asus gaming laptop", color: "black", price: 60000 },
  { name: "razor gaming Laptop", color: "black", price: 60000 },
];

// for (const allValue of moblieLists) {
//   console.log(allValue);
// }

function findPhones(mobilelist, search) {
  let matched = [];
  for (const value of mobilelist) {
    if (value.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(value);
    }
  }
  return matched;
}
let result = findPhones(moblieLists, "laptop");
console.log(result);
