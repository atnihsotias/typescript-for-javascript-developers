export {};

type Pitcher1 = {
   throwingApeed: number
};

type Batter1 = {
   battingAverage: number
};

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
   throwingApeed: 165,
   battingAverage: 0.286
}