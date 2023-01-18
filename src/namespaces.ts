export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Ocaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

let me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

let michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
