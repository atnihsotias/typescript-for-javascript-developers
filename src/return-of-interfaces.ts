export {};

class Mohotsukai {}
class Souryo {}

// class Taro extends Mohotsukai, Souryo {

// }

interface Kenja {
   ionazun(): void;
}
interface Sensi {
   kougeki(): void;
}

class Jiro implements Kenja, Sensi{
   ionazun(): void {
      console.log('ionazun');
   }
   kougeki(): void {
      console.log('kougeki');
   }
}

const jiro = new Jiro;
console.log(jiro.ionazun());
