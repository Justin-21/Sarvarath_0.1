import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableHighlight
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Profile")}
      >
        <FontAwesome
          name="user"
          color="black"
          size={16}
          style={styles.icon}
        />
      </TouchableHighlight>

      <View>
        <Text style={styles.title}>SARVARATH</Text>
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.location}>GKP</Text>
        <Entypo
          name="chevron-small-down"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 15,
    paddingTop: 50,
    alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: "#ffd700",
    width: "100%",
    height: 100,
    flexDirection: "row",
  },

  iconContainer: {
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
    fontFamily: "Poppins_600SemiBold",
  },

  locationContainer: {
    flexDirection: "row",
  },

  location: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
});
