import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color="#ffd700"
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
