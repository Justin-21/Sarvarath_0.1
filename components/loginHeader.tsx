import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const LoginHeader = ({ navigation }) => {
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

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SARVARATH</Text>
      </View>

      <View style={styles.locationContainer}>
        <Text>GKP</Text>
      </View>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 15,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ff0000",
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
  titleContainer: {},
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  locationContainer: {},
});
