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
import { Alert } from "react-native";

export default function HomePage({ navigation }) {
  var [count, setCount] = useState(0);

  //function to close the app when user gestures back on screen
  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation],
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setCount(count++);
        if (count > 0) {
          // Prompt the user before leaving the screen
          Alert.alert("Exit", "Are you sure you want to exit the app", [
            {
              text: "Cancel",
              onPress: () => setCount(0),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                BackHandler.exitApp();
                setCount(0);
              },
            },
          ]);
        }
        return true;
      },
    );

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [navigation, count]);

  const [search, setSearch] = useState<string>("");

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search for a bus"
        value={search}
        onChangeText={setSearch}
        rightIcon={{
          type: "ant-design",
          name: "search1",
          color: "grey",
        }}
      />

      <Text>Hello From Home Page</Text>
      <Button onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
