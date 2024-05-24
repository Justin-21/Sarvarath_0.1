import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { Text, TouchableOpacity, View } from "react-native";
import { Stack, router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import { LocationProvider } from "@/context/locationContext";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DropDown from "@/components/DropDown";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_100: Poppins_100Thin,
    Poppins_200: Poppins_200ExtraLight,
    Poppins_300: Poppins_300Light,
    Poppins_400: Poppins_400Regular,
    Poppins_500: Poppins_500Medium,
    Poppins_600: Poppins_600SemiBold,
    Poppins_700: Poppins_700Bold,
    Poppins_800: Poppins_800ExtraBold,
    Poppins_900: Poppins_900Black,
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [error, loaded]);

  if (!loaded && !error) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <LocationProvider>
      <Stack
        initialRouteName="onboardingScreen/index"
        screenOptions={{
          statusBarStyle: "dark",
        }}
      >
        <Stack.Screen
          name="onboardingScreen/index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="index"
          options={{
            //header Left Button
            statusBarHidden: false,
            statusBarStyle: "dark",
            statusBarColor: "#ffd700",
            headerShown: true,
            header: () => {
              return (
                <View style={styles.header}>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    activeOpacity={0.7}
                    onPress={() => router.navigate("profile")}
                  >
                    <FontAwesome5
                      name="user-alt"
                      color="black"
                      size={20}
                      style={styles.icon}
                    />
                  </TouchableOpacity>

                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>SARVARATH</Text>
                  </View>

                  <View style={styles.dropDown}>
                    <DropDown />
                  </View>
                </View>
              );
            },
          }}
        />

        <Stack.Screen
          name="searchBuses/index"
          options={{
            title: "Search",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="mapScreen/index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#ffd700",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  iconContainer: {
    flex: 1 / 3,
    alignItems: "flex-end",
    justifyContent: "center",
    height: 40,
    backgroundColor: "white",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  icon: {
    marginRight: 20,
    height: "100%",
    textAlignVertical: "center",
  },

  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins_700",
    textAlign: "center",
  },

  dropDown: {
    flex: 1 / 3,
    // backgroundColor: "red",
    marginRight: 10,
  },
});
