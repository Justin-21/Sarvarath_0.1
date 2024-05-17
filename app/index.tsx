import { Alert, FlatList, ScrollView, StyleSheet, View } from "react-native";

import BusList from "@/components/busList";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import busData from "@/constants/busData";
import { Text } from "react-native";
import * as Location from "expo-location";
import { router } from "expo-router";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [userLocation, setUserLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    try {
      const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation(location);
        console.log(JSON.stringify(userLocation));
      };

      getLocation();
    } catch (error) {
      console.log(error);
    }
  }, [setUserLocation]);

  // if (errorMsg) {
  //   console.log(errorMsg);
  // }

  const handleSearch = (data: object, details: any) => {
    if (details && details.geometry && details.geometry.location) {
      // const coordinates: Coordinates = {
      //   latitude: details.geometry.location.lat,
      //   longitude: details.geometry.location.lng,
      // };

      router.navigate({
        pathname: "/searchBuses/",
        params: {
          data: data,
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        },
      });
      // navigation.navigate("SearchBuses", {
      // data: {
      //   description: data.description,
      // place_id: data.place_id,
      // },
      //   coordinates: details.geometry.location,
      // });
      // console.log(data);
      // console.log(JSON.stringify(details));
      // console.log(details.geometry.location);
    } else {
      console.log("Coordinates not available");
    }
  };

  return (
    <>
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> </TouchableWithoutFeedback> */}
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
