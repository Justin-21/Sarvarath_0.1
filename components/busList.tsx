import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

interface busListProps {
  ETA: string;
  nextStop: string;
  route: string;
  busNumber: string;
  lastStop: string;
}

const BusList: React.FC<busListProps> = ({
  ETA,
  nextStop,
  route,
  busNumber,
  lastStop,
}) => {
  return (
    <View style={styles.listContainer}>
      {/* left */}
      <View style={styles.left}>
        <Text style={[styles.map]}>MAPView</Text>
        <View style={[styles.eta, styles.contentBox]}>
          <Text style={styles.heading}>Time to reach</Text>
          <Text style={styles.content}>{ETA}</Text>
        </View>
        <View style={[styles.busNo, styles.contentBox]}>
          <Text style={styles.heading}>Bus Number</Text>
          <Text style={styles.content}>{busNumber}</Text>
        </View>
      </View>

      {/* right */}
      <View style={styles.right}>
        <View style={[styles.route, styles.contentBox]}>
          <Text style={styles.heading}>Route</Text>
          <Text style={styles.content}>{route}</Text>
        </View>

        <View style={[styles.lastStop, styles.contentBox]}>
          <Text style={styles.heading}>Last Stop</Text>
          <Text style={styles.content}>{lastStop}</Text>
        </View>

        <View style={[styles.nextStop, styles.contentBox]}>
          <Text style={styles.heading}>Next Stop</Text>
          <Text style={styles.content}>{nextStop}</Text>
        </View>

        <TouchableOpacity style={[styles.trackBtn]}>
          <FontAwesome6
            name="location-arrow"
            size={24}
            color="#7abd23"
          />
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 14,
              color: "#58841e",
            }}
          >
            Track Live Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusList;

const styles = StyleSheet.create({
  listContainer: {
    width: Dimensions.get("screen").width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("screen").height / 3,
    backgroundColor: "#36363620",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },

  left: {
    flex: 1,
    gap: 5,
  },

  right: {
    flex: 1,
    gap: 5,
  },

  contentBox: {
    backgroundColor: "#36363630",
    fontFamily: "Poppins_500Medium",
    borderRadius: 5,
    maxHeight: 60,
    padding: 10,
    justifyContent: "center",
  },

  heading: {
    fontFamily: "Poppins_500Medium",
    fontSize: 12,
    color: "#00000090",
    lineHeight: 16,
  },

  content: {
    color: "#000000",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    lineHeight: 18,
  },

  map: {
    flex: 4,
    backgroundColor: "#363636",
    borderRadius: 5,
  },

  eta: {
    flex: 1,
  },

  busNo: {
    flex: 1,
  },

  route: {
    flex: 1,
  },

  lastStop: {
    flex: 1,
  },

  nextStop: {
    flex: 1,
  },

  trackBtn: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#a5ff3080",
  },
});
