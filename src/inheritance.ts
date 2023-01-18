export {};

class Animal {
   constructor(public name: string){}
   run(): string {
      return 'I can run';
   }
}

class Lion extends Animal {
   public speed: number

   constructor(name: string, speed: number){
      super(name);

      this.speed = speed;
   }
   run(): string {
      const parentMessage = super.run();
      return `${parentMessage} ${this.speed}km.`;
   }
}

let animal = new Animal('Mickiy');
console.log(animal.run());

let lion = new Lion('Symba', 80);
console.log(lion.run());