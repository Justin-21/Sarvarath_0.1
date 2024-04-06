import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var [count, setCount] = useState(0);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
      }),
    [navigation],
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setCount(count++);
        if (count > 1) {
          setCount(0);
          BackHandler.exitApp();
        }
        return true;
      },
    );

    return () => {
      BackHandler.remove();
    };
  }, [navigation]);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter Email and Password");
    }
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
              fontSize: 16,
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
