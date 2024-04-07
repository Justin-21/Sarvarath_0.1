import {
  BackHandler,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import {
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BusList from "@/components/busList";

export default function HomePage({ navigation }) {
  var [count, setCount] = useState(0);

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <AntDesign
            name="search1"
            size={18}
            color="black"
          />
          <TextInput
            placeholder="Search"
            style={styles.searchBar}
            placeholderTextColor="#00000080"
          />
        </View>

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
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  searchBarContainer: {
    flexDirection: "row",
    width: "90%",
    height: 50,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 6,
    paddingHorizontal: 16,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
  },

  searchBar: {
    color: "#000000",
    width: "90%",
    fontSize: 14,
    paddingLeft: 20,
    fontFamily: "Poppins_500Medium",
  },

  scroll: {
    // alignItems: "center",
    marginTop: 10,
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
