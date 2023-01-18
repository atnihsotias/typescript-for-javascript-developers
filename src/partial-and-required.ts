export {};

type Propaty = {
   name: string;
   age: number;
   zipCode: number;
}

type PartialType = Partial<Propaty>;
type RequiredType = Required<Propaty>;