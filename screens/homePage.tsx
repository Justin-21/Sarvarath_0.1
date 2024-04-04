import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { Link, Stack } from "expo-router";
import { SearchBar } from "react-native-screens";

export default function HomePage() {
  return (
    <View>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
