import React, { useEffect } from "react";
import {
  Dimensions,
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
import { useRouter } from "expo-router";
import { BackHandler } from "react-native";

export default function Profile({ navigation }) {
  const router = useRouter();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.topSection}>
            <View style={styles.propicArea}>
              <FontAwesome
                name="user"
                color="black"
                size={120}
              />
            </View>
            <Text style={styles.name}>Harshit Tiwari</Text>
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
                <FontAwesome
                  name="phone"
                  size={24}
                  color="black"
                />
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
                <FontAwesome
                  name="phone"
                  size={24}
                  color="black"
                />
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
                <FontAwesome
                  name="phone"
                  size={24}
                  color="black"
                />
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
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  safeArea: {
    flex: 1,
  },
  topSection: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  propicArea: {
    width: 150,
    height: 150,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  propic: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#ffd700",
  },
  name: {
    marginTop: 20,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },

  buttonList: {
    width: Dimensions.get("screen").width,
    height: "100%",
    alignItems: "center",
    gap: 8,
    marginBottom: 100,
  },

  field: {
    padding: 5,
    paddingLeft: 10,
    color: "#00000080",
    fontSize: 12,
  },

  buttonSection: {
    width: Dimensions.get("screen").width - 50,
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#00000040",
    borderRadius: 8,
    alignItems: "center",
    gap: 10,
    paddingLeft: 14,
  },

  data: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
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
