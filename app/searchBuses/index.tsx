import { BackHandler, StyleSheet, View } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BusList from "@/components/busList";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

interface Coordinates {
  lat: number;
  lng: number;
}

export default function SearchBuses() {
  //function to handle the back gesture

  const { data, latitude, longitude } = useLocalSearchParams();
  // const coordinatesObject = coordinates as Coordinates;

  // const lat = coordinatesObject?.lat;
  // const lng = coordinatesObject?.lng;

  useEffect(() => {
    const backAction = () => {
      router.back();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [router]);

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <BusList
          lat={Number(latitude)}
          lng={Number(longitude)}
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
