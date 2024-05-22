type busRouteData = [
  {
    id: number;
    busData: {
      busNumber: string;
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
  }
];

const busRouteData = [
  {
    id: 1,
    busData: {
      busNumber: "UP53 XY 0001",
      stops: [
        {
          location: "Mahesara",
          coordinates: {
            latitude: 26.830815410034973,
            longitude: 83.3494134243075,
          },
        },
        {
          location: "Shyam Nagar Road",
          coordinates: {
            latitude: 26.82937935363778,
            longitude: 83.35023418469137,
          },
        },
        {
          location: "Moharipur Chowk",
          coordinates: {
            latitude: 26.819958219563407,
            longitude: 83.3500839812463,
          },
        },
        {
          location: "Khandelwal Steels",
          coordinates: {
            latitude: 26.808836568555563,
            longitude: 83.35160181170876,
          },
        },
        {
          location: "Bargadwa Tiraha",
          coordinates: {
            latitude: 26.809465148061648,
            longitude: 83.35121057829045,
          },
        },
        {
          location: "Adrash Dharam Kata",
          coordinates: {
            latitude: 26.804016209944972,
            longitude: 83.35259024246601,
          },
        },
        {
          location: "Chirkutaha Baba Mandir",
          coordinates: {
            latitude: 26.790714153679605,
            longitude: 83.35584954956389,
          },
        },
        {
          location: "Kusth Seva Ashram",
          coordinates: {
            latitude: 26.786502640460686,
            longitude: 83.3564340944809,
          },
        },
        {
          location: "Udyog Bhawan",
          coordinates: {
            latitude: 26.781909100140176,
            longitude: 83.35737390602655,
          },
        },
        {
          location: "Gorakhnath Hospital",
          coordinates: {
            latitude: 26.77646419758135,
            longitude: 83.3583187355824,
          },
        },
        {
          location: "Gorakhnath Mandir",
          coordinates: {
            latitude: 26.77160104606258,
            longitude: 83.35859164169256,
          },
        },
        {
          location: "Shankar Eye Hospital",
          coordinates: {
            latitude: 26.767628116260262,
            longitude: 83.35751833385063,
          },
        },
        {
          location: "Tarang Crossing",
          coordinates: {
            latitude: 26.7641283706909,
            longitude: 83.3606967314738,
          },
        },
        {
          location: "DharamShala Bazar",
          coordinates: {
            latitude: 26.763567776711934,
            longitude: 83.36450718472965,
          },
        },
        {
          location: "Yatayat Tiraha",
          coordinates: {
            latitude: 26.760647832544773,
            longitude: 83.37308723760178,
          },
        },
        {
          location: "Railway Station",
          coordinates: {
            latitude: 26.759791166099635,
            longitude: 83.37789443178377,
          },
        },
        {
          location: "Roadways Bus Station",
          coordinates: {
            latitude: 26.75884276202285,
            longitude: 83.38115599800362,
          },
        },
        {
          location: "University Chauraha",
          coordinates: {
            latitude: 26.75281907745652,
            longitude: 83.38117498273816,
          },
        },
        {
          location: "DDU University",
          coordinates: {
            latitude: 26.748220537205736,
            longitude: 83.38066584153259,
          },
        },
        {
          location: "Chatra Singh Chauraha",
          coordinates: {
            latitude: 26.74539423388997,
            longitude: 83.38004198346945,
          },
        },
        {
          location: "Paidleganj",
          coordinates: {
            latitude: 26.74484629530299,
            longitude: 83.3854412066121,
          },
        },
        {
          location: "Indranagar",
          coordinates: {
            latitude: 26.740828249098687,
            longitude: 83.38068901438731,
          },
        },
        {
          location: "Deoria Bypass",
          coordinates: {
            latitude: 26.737066596365548,
            longitude: 83.37349158186409,
          },
        },
        {
          location: "Rustampur Chauraha",
          coordinates: {
            latitude: 26.734919286059394,
            longitude: 83.36854933540937,
          },
        },
        {
          location: "Naveen Mandi",
          coordinates: {
            latitude: 26.734476389297683,
            longitude: 83.36354839851975,
          },
        },
        {
          location: "Transport Nagar",
          coordinates: {
            latitude: 26.734316223920217,
            longitude: 83.35905432691936,
          },
        },
        {
          location: "Amrood Mandi",
          coordinates: {
            latitude: 26.733511337603293,
            longitude: 83.35322856903652,
          },
        },
        {
          location: "Nausad Chauraha",
          coordinates: {
            latitude: 26.732355201841017,
            longitude: 83.33788130423056,
          },
        },
        {
          location: "Khajani Modd",
          coordinates: {
            latitude: 26.734482792412738,
            longitude: 83.3316128969498,
          },
        },
        {
          location: "EKdanga Shiv Mandir",
          coordinates: {
            latitude: 26.738051168771268,
            longitude: 83.32278050778055,
          },
        },
        {
          location: "Koliya",
          coordinates: {
            latitude: 26.739110752884933,
            longitude: 83.31381849125638,
          },
        },
        {
          location: "Barahuva Yadav Tola",
          coordinates: {
            latitude: 26.739644160900934,
            longitude: 83.30912744121939,
          },
        },
        {
          location: "Power House",
          coordinates: {
            latitude: 26.737081226858812,
            longitude: 83.29888162503472,
          },
        },
        {
          location: "Barvar Chauraha",
          coordinates: {
            latitude: 26.739341562802263,
            longitude: 83.29009238707587,
          },
        },
        {
          location: "Badagahan",
          coordinates: {
            latitude: 26.742978888746627,
            longitude: 83.28180012985867,
          },
        },
        {
          location: "Jaipuriya School Chauraha Sector 7",
          coordinates: {
            latitude: 26.743248953095584,
            longitude: 83.2774151486721,
          },
        },
        {
          location: "ITM Gida",
          coordinates: {
            latitude: 26.743473721512732,
            longitude: 83.27411727175384,
          },
        },
        {
          location: "KIPM Chauraha",
          coordinates: {
            latitude: 26.743710535471166,
            longitude: 83.27094612963255,
          },
        },
        {
          location: "Kalesar",
          coordinates: {
            latitude: 26.744784439667008,
            longitude: 83.26155414627434,
          },
        },
        {
          location: "Kalesar Zero Point",
          coordinates: {
            latitude: 26.746575110103787,
            longitude: 83.25090710473759,
          },
        },
        {
          location: "Adarsh Gram Kalesar",
          coordinates: {
            latitude: 26.747414352786024,
            longitude: 83.24667519657208,
          },
        },
        {
          location: "Gida Hp Gas Plant",
          coordinates: {
            latitude: 26.748426448201602,
            longitude: 83.24105293135518,
          },
        },
        {
          location: "Bokta Chauraha",
          coordinates: {
            latitude: 26.74890326605933,
            longitude: 83.23832323438157,
          },
        },
        {
          location: "Gida Sector 13 and 15",
          coordinates: {
            latitude: 26.749331633949268,
            longitude: 83.23592289708644,
          },
        },
        {
          location: "Dana Pani Hotel",
          coordinates: {
            latitude: 26.751389670900696,
            longitude: 83.22498721079984,
          },
        },

        {
          location: "Sahjanwa",
          coordinates: {
            latitude: 26.753897041705603,
            longitude: 83.21355454604989,
          },
        },
      ],
      route: "MHE - SHJ",
    },
  },

  {
    id: 2,
    busData: {
      busNumber: "UP52 XY 0002",
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
      route: "RLM : GKP APT",
    },
  },
];

export default busRouteData;
