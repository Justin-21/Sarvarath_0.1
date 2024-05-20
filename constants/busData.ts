type busData = {
  ETA: string;
  route: string;
  busNumber: string;
  lastStop: string;
  nextStop: string;
};

const busData = [
  {
    ETA: "5 min",
    route: "ABC - DEF",
    busNumber: "UP53 XY 0001",
    lastStop: "Rustampur",
    nextStop: "Amrud Mandi",
  },
  {
    ETA: "8 min",
    route: "GHI - JKL",
    busNumber: "UP53 XY 0002",
    lastStop: "Medical College",
    nextStop: "Mugalaha",
  },
];

export default busData;
