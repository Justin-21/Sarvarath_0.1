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
import { Image, TouchableWithoutFeedback, Keyboard } from "react-native";

const logo = require("../assets/images/logo.png");

const googleIcon = require("../assets/images/googleIcon.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var [count, setCount] = useState(0);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e: any) => {
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
      backHandler.remove();
    };
  }, [navigation, count]);

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  // const handleLogin = () => {
  //   if (!email || !password) {
  //     alert("Please enter Email and Password");
  //   }
  //   if (email && password) {
  //     navigation.navigate("Home");
  //     setEmail("");
  //     setPassword("");
  //   }
  // };

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
              fontFamily: "Poppins_400",
            }}
          >
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: "#1B1B1B",
              fontFamily: "Poppins_600",
            }}
          >
            Sarvarath
          </Text>
        </View>

        <View style={styles.loginOption}>
          {/* Login with Google */}
          <TouchableOpacity
            style={styles.googleLoginBtn}
            onPress={handleLogin}
          >
            <Text
              style={{
                color: "#0a0a0a",
                textAlign: "right",
                fontFamily: "Poppins_500",
                fontSize: 16,
              }}
            >
              Login with
            </Text>
            <Image
              source={googleIcon}
              resizeMode="contain"
              style={{
                height: "50%",
                width: "30%",
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Poppins_600",
              fontSize: 16,
            }}
          >
            Or
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            style={styles.skipBtn}
          >
            <Text style={styles.skipText}>Continue without login</Text>
          </TouchableOpacity>
        </View>
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
    margin: 10,
  },
  logo: {
    width: 120,
    height: 60,
  },

  loginOption: {
    width: "100%",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  googleLoginBtn: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  skipBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffd700",
    height: 50,
    width: "80%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  skipText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
