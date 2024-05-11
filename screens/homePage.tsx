import { Alert, FlatList, ScrollView, StyleSheet, View } from "react-native";

import BusList from "@/components/busList";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import busData from "@/constants/busData";
import { Text } from "react-native";
import * as Location from "expo-location";

export default function HomePage({ navigation }) {
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    console.log(JSON.stringify(location));
  }

  const handleSearch = (data: object, details: any) => {
    navigation.navigate("SearchBuses", {
      data: data,
      coordinates: details.geometry.location,
    });
    // console.log(data);
    // console.log(details);
    // console.log(details.geometry.location);
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
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },

  searchBarContainer: {
    flex: 0,
    width: "90%",
    marginVertical: 10,
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
    paddingVertical: 10,
  },
});
