//*   Basic Types */
let boolean: boolean = true;
let string: string = "Anything";
let number: number = 10; // All kind of number 10, 1.52, -5.12, 0xf00d
let symbol: symbol = Symbol("Anything-here");
// let bigInt: bigint = 10n;

//* Arrays */
let numberArray: Array<number> = [];
let stringArray: Array<string> = [];

let numberArray2: number[] = []; //* Other way to do the same thing
let stringArray2: string[] = []; //* ""            ""            ""

//*  Objects */
let people: { name: string; yo: number; adult?: boolean } = {
  name: "",
  yo: 21,
  //the field "adult" is optional
};

//* Functions */
function sum(x: number, y: number) {
  return x + y;
}

let times = (x: number, y: number) => {
  return x * y;
};
//*      |     THIS IS THE TYPE OF "sum2"   |
let sum2: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};

let x = () => {};
