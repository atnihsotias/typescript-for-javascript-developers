export {};

// const echo = (arg: number):number => {
//    return arg;
// }

// const echo = (arg: string):string => {
//    return arg;
// }

const echo = <T>(arg: T): T => {
   return arg;
}

console.log(echo<number>(100));

class Mirror <T> {
   constructor(public value: T) {}

   echo(): T {
      return this.value;
   }
}

console.log(new Mirror<Number>(123).echo());
console.log(new Mirror<String>('Hello generics!').echo());
