import { BackHandler, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BusList from "@/components/busList";

export default function SearchBuses({ navigation, route }) {
  //function to handle the back gesture

  const { data } = route.params;
  const { coordinates } = route.params;

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <BusList
          lat={coordinates.lat}
          lng={coordinates.lng}
          ETA="5 min"
          route="ABC - XYZ"
          busNumber="UP53 XX XXXX"
          lastStop="Rustampur"
          nextStop="Amrud Mandi"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
