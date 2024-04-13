import "react-native-gesture-handler";
import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { HomePage, Login, Profile, SearchBuses } from "@/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "@/screens/onboardingScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "GKP", value: "Gorakhpur" },
    { label: "VNS", value: "Varanasi" },
    { label: "DEL", value: "Delhi" },
    { label: "MUM", value: "Mumbai" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      placeholder="City"
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      showArrowIcon={false}
      showTickIcon={false}
      textStyle={{
        textAlign: "right",
        fontFamily: "Poppins_600",
      }}
      listItemLabelStyle={{
        textAlign: "left",
      }}
      style={{
        borderWidth: 0,
        backgroundColor: "transparent",
      }}
      selectedItemContainerStyle={{
        backgroundColor: "#ffd70080",
      }}
      selectedItemLabelStyle={{
        fontFamily: "Poppins_700",
      }}
      dropDownContainerStyle={{
        borderWidth: 0,
      }}
      listItemContainerStyle={{
        borderWidth: 0,
      }}
    />
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={HomePage}
            options={({ navigation }) => ({
              //header Left Button
              headerLeft: () => (
                <TouchableOpacity
                  style={styles.iconContainer}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Profile")}
                >
                  <FontAwesome
                    name="user"
                    color="black"
                    size={16}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              ),

              //header Title
              headerTitle: "SARVARATH",
              headerStyle: {
                backgroundColor: "#ffd700",
              },
              headerTitleStyle: styles.title,
              headerTitleAlign: "center",

              //header Right Button
              headerRight: () => (
                <View style={styles.locationContainer}>
                  <Dropdown />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: true,
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="SearchBuses"
            component={SearchBuses}
            options={{
              title: "Search",
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  iconContainer: {
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  icon: {
    borderRadius: 100,
  },

  title: {
    fontSize: 20,
    fontFamily: "Poppins_700",
  },

  locationContainer: {
    flexDirection: "row",
    marginRight: 20,
  },
  location: {
    fontSize: 14,
    fontFamily: "Poppins_500",
  },
});
