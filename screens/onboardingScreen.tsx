import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";

const OnboardingScreen = (navigation : any) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <OnboardFlow
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            title: "Hello User!",
            subtitle: (
              <Text style={{ fontWeight: "400", fontSize: 18 }}>
                Welcome to Sarvarath
              </Text>
            ),
            imageUri: Image.resolveAssetSource(
              require("../assets/images/logo.png"),
            ).uri,
          },
          {
            title: "Find nearby Buses",
            subtitle: (
              <Text style={{ fontWeight: "400", fontSize: 18 }}>
                Remove any hassle and find the bus to your destination,
              </Text>
            ) as any,
            imageUri: Image.resolveAssetSource(
              require("../assets/images/nearbyBus.png"),
            ).uri,
          },
          {
            title: "Track Buses",
            subtitle: (
              <Text style={{ fontWeight: "400", fontSize: 18 }}>
                A convenient way to track the location of the buses
              </Text>
            ) as any,
            imageUri: Image.resolveAssetSource(
              require("../assets/images/trackBus.jpg"),
            ).uri,
          },
          {
            title: "Bus Info",
            subtitle: typeof(
              <Text style={{ fontWeight: "400", fontSize: 18 }}>
                Get detailed information about the stops and routes of any bus
              </Text>
            )as any,
            imageUri: Image.resolveAssetSource(
              require("../assets/images/busDetails.jpg"),
            ).uri,
          },
          {
            title: "Let's get you started!",
            subtitle: (
              <Text style={{ fontWeight: "400", fontSize: 18 }}>
                Login or Register to continue
              </Text>
            ) as any,
            imageUri: Image.resolveAssetSource(
              require("../assets/images/getStarted.jpg"),
            ).uri,
          },
        ]}
        type="fullscreen"
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
  lottie: {
    width: 300,
    height: 400,
  },
});
