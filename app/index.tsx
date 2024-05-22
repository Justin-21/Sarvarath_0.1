import { FlatList, StyleSheet, Text, View } from "react-native";

import BusList from "@/components/busList";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { useContext, useEffect, useState } from "react";
import busData from "@/constants/busData";
import busRouteData from "@/constants/busRouteData";
import * as Location from "expo-location";
import { router } from "expo-router";
import LocationContext from "@/context/locationContext";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [userLocation, setUserLocation] = useState<Location.LocationObject>();

  const { location, errorMsg } = useContext(LocationContext);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
    console.log(location);
  }

  // useEffect(() => {
  //   try {
  //     const getLocation = async () => {
  //       let { status } = await Location.requestForegroundPermissionsAsync();

  //       if (status !== "granted") {
  //         console.log("Permission to access location was denied");
  //         return;
  //       }

  //       let location = await Location.getCurrentPositionAsync({});
  //       setUserLocation(location);
  //       console.log(JSON.stringify(userLocation));
  //     };

  //     getLocation();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [setUserLocation]);

  const handleSearch = (data: object, details: any) => {
    if (details && details.geometry && details.geometry.location) {
      router.navigate({
        pathname: "/searchBuses/",
        params: {
          data: data,
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        },
      });

      // console.log(data);
      // console.log(JSON.stringify(details));
      // console.log(details.geometry.location);
    } else {
      console.log("Coordinates not available");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          styles={{
            container: styles.searchBarContainer,
            textInput: styles.searchBarText,
          }}
          minLength={2}
          enablePoweredByContainer={false}
          placeholder="Search for a location"
          debounce={400}
          onPress={(data, details = null) => {
            handleSearch(data, details);
          }}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
        />

        <FlatList
          data={busData}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <BusList
              ETA={item.ETA}
              route={item.route}
              busNumber={item.busNumber}
              lastStop={item.lastStop}
              nextStop={item.nextStop}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    gap: 10,
  },

  searchBarContainer: {
    flex: 0,
    width: "90%",
    marginTop: 10,
  },

  searchBarText: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#e0e0e0",
    paddingVertical: 0,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: "Poppins_500",
  },

  listContainer: {
    gap: 10,
    width: "100%",
    paddingBottom: 30,
  },
});
