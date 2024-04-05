import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    if (!name || !email || !password) {
      alert("Please enter all the details");
    }
    if (name && email && password) {
      alert("Successfully Registered. Please Login to continue");
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <FontAwesome5
        name="bus"
        size={60}
        color="#ffd700"
      />
      <Text
        style={{
          fontSize: 30,
          color: "#1B1B1B",
          fontWeight: "400",
          marginTop: 30,
        }}
      >
        Welcome to
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: "#1B1B1B",
          fontWeight: "600",
          marginBottom: 30,
        }}
      >
        Sarvarath
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "black",
        }}
      >
        Register to get started!
      </Text>

      {/* Input for name */}
      <TextInput
        placeholder="Name"
        placeholderTextColor="#6D6D6D"
        keyboardType="default"
        value={name}
        onChangeText={setName}
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

      {/* Input for Email */}
      <TextInput
        placeholder="Email"
        placeholderTextColor="#6D6D6D"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
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

      {/* Input for password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#6D6D6D"
        value={password}
        onChangeText={setPassword}
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
        onPress={handleSignUp}
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
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          color: "black",
        }}
      >
        Already a member?
      </Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text
          style={{
            color: "#2974D3",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          Login
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
