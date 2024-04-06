import "react-native-gesture-handler";
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from "react-native";

import {
  HomePage,
  Login,
  Profile,
  SearchBuses,
  SignUp,
  Welcome,
} from "@/screens";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "@/screens/onboardingScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: "HomePage",
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: "Profile",
        }}
      />
      <Drawer.Screen
        name="SearchBuses"
        component={SearchBuses}
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerTitle: "Log In",
          headerLeft: () => <></>,
        }}
        component={Login}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerTitle: "Sign Up",
        }}
        component={SignUp}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: "Profile",
        }}
      />
      <Stack.Screen
        name="SearchBuses"
        component={SearchBuses}
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar barStyle="dark-content" />
      <StackNav />
    </NavigationContainer>
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
