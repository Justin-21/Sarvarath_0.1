import React, { createContext, useState, useEffect, ReactNode } from "react";
import * as Location from "expo-location";

// Define types for the context
interface LocationContextProps {
  location: Location.LocationObject | null;
  errorMsg: string | null;
  getUserLocation: Function;
}

// Create the context with default values
const LocationContext = createContext<LocationContextProps>({
  location: null,
  errorMsg: null,
  getUserLocation: () => {},
});

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getUserLocation = () => {
    let subscriber: Location.LocationSubscription | null = null;

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      subscriber = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.Highest,
          timeInterval: 10000, // Update every 10 seconds
          distanceInterval: 10, // Update every 10 meters
        },
        (newLocation) => {
          setLocation(newLocation);
        }
      );
    })();

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  };

  return (
    <LocationContext.Provider value={{ location, errorMsg, getUserLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
