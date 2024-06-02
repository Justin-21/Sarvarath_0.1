import { Image, StatusBar, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { OnboardFlow } from "react-native-onboard";
import { router } from "expo-router";

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <OnboardFlow
        onDone={() => {
          router.navigate("/(auth)/login");
        }}
        subtitleStyle={styles.subTitle}
        titleStyle={styles.title}
        pages={[
          {
            title: "Hello User!",
            subtitle: "Welcome To Sarvarath",
            imageUri: Image.resolveAssetSource(
              require("../../assets/images/logo.png")
            ).uri,
          },
          {
            title: "Find nearby Buses",
            subtitle: "Remove any hassle and find the bus to your destination",
            imageUri: Image.resolveAssetSource(
              require("../../assets/images/nearbyBus.png")
            ).uri,
          },
          {
            title: "Track Buses",
            subtitle: "A convenient way to track the location of the buses",
            imageUri: Image.resolveAssetSource(
              require("../../assets/images/trackBus.jpg")
            ).uri,
          },
          {
            title: "Bus Info",
            subtitle:
              "Get detailed information about the stops and routes of any bus",
            imageUri: Image.resolveAssetSource(
              require("../../assets/images/busDetails.jpg")
            ).uri,
          },
          {
            title: "Let's get you started!",
            subtitle: "Login to continue",
            imageUri: Image.resolveAssetSource(
              require("../../assets/images/getStarted.jpg")
            ).uri,
          },
        ]}
        type={"fullscreen"}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    fontWeight: "300",
    fontFamily: "Poppins_600",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: "Poppins_400",
    color: "#5a5a5a",
  },
});
