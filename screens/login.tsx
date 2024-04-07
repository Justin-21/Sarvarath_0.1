import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  BackHandler,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Image, TouchableWithoutFeedback, Keyboard } from "react-native";

import logo from "../assets/images/logo.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var [count, setCount] = useState(0);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation],
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setCount(count++);
        if (count > 0) {
          // Prompt the user before leaving the screen
          Alert.alert("Exit", "Are you sure you want to exit the app", [
            {
              text: "Cancel",
              onPress: () => setCount(0),
              style: "cancel",
            },
            {
              text: "OK",
              onPress: () => {
                BackHandler.exitApp();
                setCount(0);
              },
            },
          ]);
        }
        return true;
      },
    );

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [navigation, count]);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter Email and Password");
    }
    if (email && password) {
      navigation.navigate("Home");
      setEmail("");
      setPassword("");
    }
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={logo}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.topContainer}>
          <Text
            style={{
              fontSize: 16,
              color: "#1B1B1B",
              fontFamily: "SpaceMono",
              letterSpacing: -1,
            }}
          >
            Login to
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: "#1B1B1B",
              fontWeight: "600",
            }}
          >
            Sarvarath
          </Text>
        </View>

        {/* Login with Google */}
        <View style={styles.loginOption}>
          <Text style={{ color: "#0d0d0d90" }}>Login with Google</Text>
          <View style={styles.googleLogin}>
            <Pressable>
              <AntDesign
                name="google"
                size={24}
                color="black"
                style={styles.google}
              />
            </Pressable>
          </View>

          <Text>Or</Text>
        </View>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#6D6D6D"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          //styling for email input
          style={styles.inputBox}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#6D6D6D"
          secureTextEntry //this is to hide the password entry
          //
          value={password}
          onChangeText={setPassword}
          //styling for password input
          style={styles.inputBox}
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
              textAlign: "center",
              fontWeight: "600",
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
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 120,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
    margin: 10,
  },
  logo: {
    width: 120,
    height: 60,
  },
  inputBox: {
    backgroundColor: "#f0f0f0",
    width: "80%",
    height: 50,
    color: "#0a0a0a",
    fontWeight: "600",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  loginOption: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  googleLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 10,
    margin: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
  },
});
