export {};

class Person {
   constructor(public name: string, public age: number) {}
}

type PersonType = typeof Person;
type PersonProfile = ConstructorParameters<PersonType>;