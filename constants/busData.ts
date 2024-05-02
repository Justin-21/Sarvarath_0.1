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
    busNumber: "UP53 XX XXXX",
    lastStop: "Rustampur",
    nextStop: "Amrud Mandi",
  },
  {
    ETA: "8 min",
    route: "GHI - JKL",
    busNumber: "UP53 XX XXXX",
    lastStop: "Medical College",
    nextStop: "Mugalaha",
  },
  {
    ETA: "2 min",
    route: "MNO - PQR",
    busNumber: "UP53 XX XXXX",
    lastStop: "Gorakhnath mandir",
    nextStop: "Dharamshala",
  },
];

export default busData;
