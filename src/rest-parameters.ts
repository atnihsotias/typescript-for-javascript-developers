export {};

const reducer = (accumlator: number, curentValue: number): number => {
   console.log({ accumlator, curentValue });
   return accumlator + curentValue;
};

const sum = (...values: number[]): number => {
   console.log(values);
   return values.reduce(reducer);
};

sum(1, 2, 3, 4, 5);