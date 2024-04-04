import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const handleLogin = () => {};

const handleSignUp = () => {};

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={"logo-android"}
        size={60}
        color={"#1B1B1B"}
      />
      <Text
        style={{
          fontSize: 30,
          color: "#1B1B1B",
          fontWeight: "400",
          marginBottom: 30,
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: "#1B1B1B",
          fontWeight: "600",
          //   marginTop: 50,
        }}
      >
        Sarvarath
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "black",
          marginTop: 20,
        }}
      >
        Login to find the bus to your destination!
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#6D6D6D"
        keyboardType="email-address"
        style={{
          backgroundColor: "#f0f0f0",
          width: "80%",
          height: 50,
          color: "#0a0a0a",
          fontWeight: "600",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginVertical: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#6D6D6D"
        secureTextEntry
        style={{
          backgroundColor: "#f0f0f0",
          width: "80%",
          height: 50,
          color: "#0a0a0a",
          fontWeight: "600",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginVertical: 10,
        }}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#fccb37",
          width: "80%",
          padding: 10,
          borderRadius: 10,
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          color: "black",
        }}
      >
        Not a member?
      </Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text
          style={{
            color: "#2974D3",
            fontWeight: "500",
            fontSize: 15,
          }}
        >
          Register Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
