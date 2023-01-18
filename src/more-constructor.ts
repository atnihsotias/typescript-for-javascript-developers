export {};

class Person {
   constructor(public name: string, protected age: number) {}
}

let me = new Person('はむさん', 40);
console.log(me);