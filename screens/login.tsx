import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enabled, setEnabled] = useState(false);

  const handleLoginButton = () => {
    if (!email && !password) {
      setEnabled(true);
    }
    if (email && password) {
      setEnabled(false);
    }
  };

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("Home");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <>
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
            //   marginTop: 50,
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

        <TextInput
          placeholder="Email"
          placeholderTextColor="#6D6D6D"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          //styling for email input
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
          secureTextEntry //this is to hide the password entry
          //
          value={password}
          onChangeText={setPassword}
          //styling for password input
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
          disabled={enabled}
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
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
