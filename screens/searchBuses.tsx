import { BackHandler, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

export default function SearchBuses(navigation: any) {
  //function to handle the back gesture
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <View>
        <Text style={{}}>Search Page</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
