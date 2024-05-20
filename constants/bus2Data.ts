type bus2Data = {
  busNumber: number;
  stops: [
    {
      location: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    }
  ];
  route: string;
};

const bus2Data = {
  busNumber: 2,
  stops: [
    {
      location: "Rail Museum",
      coordinates: {
        latitude: 26.75134031005571,
        longitude: 83.38797721165305,
      },
    },
    {
      location: "Mohaddipur Chauraha",
      coordinates: {
        latitude: 26.74985599593457,
        longitude: 83.39735286681042,
      },
    },
    {
      location: "Ayodhya Prasad Apartment",
      coordinates: {
        latitude: 26.749435654524486,
        longitude: 83.40195223949836,
      },
    },
    {
      location: "Bharat Petrol Pump",
      coordinates: {
        latitude: 26.74893677353874,
        longitude: 83.40792041184747,
      },
    },
    {
      location: "Adalat Restaurant",
      coordinates: {
        latitude: 26.74812838088938,
        longitude: 83.4117855311022,
      },
    },
    {
      location: "Kurnaghat",
      coordinates: {
        latitude: 26.747898356474607,
        longitude: 83.4145640028615,
      },
    },
    {
      location: "AIIMS",
      coordinates: {
        latitude: 26.747631077539722,
        longitude: 83.41874307914053,
      },
    },
    {
      location: "Kendriya Vidyalaya Road",
      coordinates: {
        latitude: 26.747629749161618,
        longitude: 83.42128211181812,
      },
    },
    {
      location: "Nandanagar Crossing",
      coordinates: {
        latitude: 26.74747175940289,
        longitude: 83.42795754077191,
      },
    },
    {
      location: "Nandanagar",
      coordinates: {
        latitude: 26.747364157542517,
        longitude: 83.43208439400607,
      },
    },
    {
      location: "Gorakhpur Airport",
      coordinates: {
        latitude: 26.746666711512816,
        longitude: 83.44290697699326,
      },
    },
  ],
  route: "RLM : GKP-AIR",
};

export default bus2Data;
