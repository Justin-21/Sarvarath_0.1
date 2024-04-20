import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

// import { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BusList from "@/components/busList";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_API_KEY } from "@env";

export default function HomePage( navigation: any ) {
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

  // const [search, setSearch] = useState<string>("");

  const handleSearch = (data: any, details: any) => {
    navigation.navigate("SearchBuses");
    console.log(data);
    console.log(details);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

          <ScrollView
            style={styles.scroll}
            centerContent={true}
          >
            <BusList
              ETA="5 min"
              route="ABC - XYZ"
              busNumber="UP53 XX XXXX"
              lastStop="Rustampur"
              nextStop="Amrud Mandi"
            />
            <BusList
              ETA="8 min"
              route="ABC - XYZ"
              busNumber="UP53 XX XXXX"
              lastStop="Medical College"
              nextStop="Mugalaha"
            />
            <BusList
              ETA="2 min"
              route="ABC - XYZ"
              busNumber="UP53 XX XXXX"
              lastStop="Gorakhnath mandir"
              nextStop="Dharamshala"
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
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

  scroll: {
    marginTop: 0,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
