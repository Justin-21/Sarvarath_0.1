type busData = {
  id: number;
  ETA: string;
  route: string;
  busNumber: string;
  lastStop: string;
  nextStop: string;
};

const busData = [
  {
    id: 1,
    ETA: "5 min",
    route: "MHE - SHJ",
    busNumber: "UP53 XY 0001",
    lastStop: "Rustampur",
    nextStop: "Amrud Mandi",
  },
  {
    id: 2,
    ETA: "8 min",
    route: "RLM - GKP APT",
    busNumber: "UP53 XY 0002",
    lastStop: "Medical College",
    nextStop: "Mugalaha",
  },
];

export default busData;
