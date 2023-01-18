export {};

class MyNumberCard {
   constructor(private _owner: string, private _secretNumber: number) {}

   get owner() {
      return this._owner;
   }

   set secretNumber(secretNumber: number) {
      this._secretNumber = secretNumber;
   }

   debugPrint() {
      return `secretNumber: ${this._secretNumber}`;
   }
}

let card = new MyNumberCard('はむさん', 1234567890);

console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());