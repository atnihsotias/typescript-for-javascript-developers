export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);
console.log(typeof barCompatible);

fooCompatible = barCompatible;
console.log(typeof fooCompatible);