export {};

class VisaCard {
   constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard('はむさん');
// myVisaCard.owner = 'ベーコン';