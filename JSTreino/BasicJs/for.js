const test = ["a", "b", "c", "d", "e"];
const num = { a: 1, b: 2, c: 3, d: 4 };

for (let i in num) {
  console.log(i + " " + num[i]);
}

console.log("\n");

//* objeto não é iteravel para for of
for (let i of test) {
  console.log(i);
}
