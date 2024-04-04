import "react-native-gesture-handler";
import { StatusBar, StyleSheet } from "react-native";

import {
  HomePage,
  Login,
  Profile,
  SearchBuses,
  SignUp,
  Welcome,
} from "@/screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Drawer.Screen
        name="Home"
        component={HomePage}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        name="SearchBuses"
        component={SearchBuses}
      />
    </Drawer.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome Page"
        component={Welcome}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerTitle: "Log In",
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
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App({ navigation }) {
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
