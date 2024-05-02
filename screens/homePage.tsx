import { FlatList, ScrollView, StyleSheet, View } from "react-native";

// import { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, StatusBar } from "react-native";
import BusList from "@/components/busList";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import busData from "@/constants/busData";
import { Text } from "react-native";

export default function HomePage({ navigation }: any) {
  // var [count, setCount] = useState(0);

  //function to close the app when user gestures back on screen
  // useEffect(
  //   () =>
  //     navigation.addListener("beforeRemove", (e) => {
  //       // Prevent default behavior of leaving the screen
  //       e.preventDefault();
  //     }),
  //   [navigation],
  // );

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     () => {
  //       setCount(count++);
  //       if (count > 0) {
  //         // Prompt the user before leaving the screen
  //         Alert.alert("Exit", "Are you sure you want to exit the app", [
  //           {
  //             text: "Cancel",
  //             onPress: () => setCount(0),
  //             style: "cancel",
  //           },
  //           {
  //             text: "OK",
  //             onPress: () => {
  //               BackHandler.exitApp();
  //               setCount(0);
  //             },
  //           },
  //         ]);
  //       }
  //       return true;
  //     },
  //   );

  //   return () => {
  //     BackHandler.removeEventListener("hardwareBackPress", backHandler);
  //   };
  // }, [navigation, count]);

  const [search, setSearch] = useState<string>("");

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
        {/* search icon */}
        {/* <AntDesign
          name="search1"
          size={18}
          color="black"
        /> */}

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
