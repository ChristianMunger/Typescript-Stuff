// callback is a function inside of a function
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// takes in array of numbers and a function that does something to v which returns a number
// arrayMutate returns array of numbers
// use MutationFunction type to make a little more readable
type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

// console.log(arrayMutate([1, 2, 3], (v) => v * 10));

const MyNewMutateFunc: MutationFunction = (v: number) => v * 100;

// functions that return functions
// createAdder will take a number then add that number to the one in the addOne method
export type AdderFunction =  (val: number) => number 
export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}
const addOne = createAdder(1);
console.log(addOne(55));
