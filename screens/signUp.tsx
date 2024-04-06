import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Pressable,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.goBack();
        return true;
      },
    );

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [navigation]);

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
    <ScrollView contentContainerStyle={styles.scroll}>
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
            SignUp to
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

        {/* Sign up with Google */}
        <View style={styles.loginOption}>
          <Text style={{ color: "#0d0d0d90" }}>Sign up with Google</Text>
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

        {/* Input for first name */}
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#6D6D6D"
          keyboardType="default"
          value={name}
          onChangeText={setName}
          style={styles.inputBox}
        />

        {/* Input for last name */}
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#6D6D6D"
          keyboardType="default"
          value={name}
          onChangeText={setName}
          style={styles.inputBox}
        />

        {/* Input for Email */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6D6D6D"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          style={styles.inputBox}
        />

        {/* Input for password */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#6D6D6D"
          value={password}
          onChangeText={setPassword}
          style={styles.inputBox}
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

        <View style={{ alignItems: "center", flexDirection: "row" }}>
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
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 100,
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
