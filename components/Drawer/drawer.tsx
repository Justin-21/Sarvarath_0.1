import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomePage, Profile, SearchBuses } from "@/screens";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: "Profile" }}
      />
      <Drawer.Screen
        name="Search Buses"
        component={SearchBuses}
        options={{ drawerLabel: "Search" }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
