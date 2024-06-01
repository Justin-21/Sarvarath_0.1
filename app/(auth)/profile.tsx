import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { BackHandler } from "react-native";
import { router } from "expo-router";
import { Image } from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function Profile() {
  const [image, setImage] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    router.navigate("Login");
  };

  useEffect(() => {
    const backAction = () => {
      router.navigate("/");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.proPicArea}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.proPic}
              />
            ) : (
              <Image
                source={require("../../assets/images/placeholder.jpg")}
                resizeMode="contain"
                style={styles.proPic}
              />
            )}
          </View>
          <Pressable
            onPress={pickImage}
            style={styles.upload}
          >
            <Text>Upload</Text>
          </Pressable>
        </View>

        <View style={styles.buttonList}>
          {/* First Name */}
          <View>
            <Text style={styles.field}>First Name</Text>
            <TouchableOpacity
              style={styles.buttonSection}
              activeOpacity={0.5}
              disabled
            >
              <Text style={styles.data}>Harshit</Text>
            </TouchableOpacity>
          </View>

          {/* Last name */}
          <View>
            <Text style={styles.field}>Last Name</Text>
            <TouchableOpacity
              style={styles.buttonSection}
              activeOpacity={0.5}
              disabled
            >
              <Text style={styles.data}>Tiwari</Text>
            </TouchableOpacity>
          </View>

          {/* User Name */}
          <View>
            <Text style={styles.field}>User Name</Text>
            <TouchableOpacity
              style={styles.buttonSection}
              activeOpacity={0.5}
              disabled
            >
              <Text style={styles.data}>harshit.tiwari0710</Text>
            </TouchableOpacity>
          </View>

          {/* Mobile Number */}
          <View>
            <Text style={styles.field}>Mobile No.</Text>
            <TouchableOpacity
              style={styles.buttonSection}
              activeOpacity={0.5}
              disabled
            >
              <FontAwesome
                name="phone"
                size={24}
                color="black"
              />
              <Text style={styles.data}>+91 9876543210</Text>
            </TouchableOpacity>
          </View>

          {/* Email address */}
          <View>
            <Text style={styles.field}>Email</Text>
            <TouchableOpacity
              style={styles.buttonSection}
              activeOpacity={0.5}
              disabled
            >
              <MaterialIcons
                name="email"
                size={24}
                color="black"
              />
              <Text style={styles.data}>abcd123@gmail.com</Text>
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={handleLogout}
          >
            <SimpleLineIcons
              name="logout"
              size={24}
              color="black"
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    color: "black",
  },
  safeArea: {
    flex: 1,
  },
  topSection: {
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  proPicArea: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  proPic: {
    width: "90%",
    height: "90%",
    borderRadius: 100,
    backgroundColor: "black",
  },
  upload: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "black",
  },

  buttonList: {
    width: Dimensions.get("screen").width,
    height: "100%",
    alignItems: "center",
    gap: 8,
    marginBottom: 100,
  },

  field: {
    paddingLeft: 10,
    color: "#00000080",
    fontSize: 12,
    fontFamily: "Poppins_400",
  },

  buttonSection: {
    width: Dimensions.get("screen").width - 50,
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#00000040",
    borderRadius: 8,
    alignItems: "center",
    paddingLeft: 10,
  },

  data: {
    paddingLeft: 10,
    fontSize: 14,
    color: "black",
    fontFamily: "Poppins_500",
  },

  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 30,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "000000",
  },
});
