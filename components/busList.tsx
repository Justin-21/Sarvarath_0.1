import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

import MapView, { Marker } from "react-native-maps";
import { router, useLocalSearchParams } from "expo-router";

type busListProps = {
  lat?: number;
  lng?: number;
  id?: number;
  ETA: string;
  nextStop: string;
  route: string;
  busNumber: string;
  lastStop: string;
};

const BusList = ({
  lat,
  lng,
  ETA,
  nextStop,
  route,
  busNumber,
  lastStop,
  id,
}: busListProps) => {
  //import latitude and longitude from previous screens
  const { latitude, longitude } = useLocalSearchParams();

  const handleMapTouch = () => {
    router.navigate({
      pathname: "mapScreen",
      params: {
        latitude: latitude,
        longitude: longitude,
        id: id,
        busNo: busNumber,
      },
    });
  };

  return (
    <View style={[styles.listContainer]}>
      {/* left */}
      <View style={styles.left}>
        {/* map component */}
        <View
          style={[styles.map, styles.shadow]}
          onTouchEnd={handleMapTouch}
          onTouchMove={() => {}}
        >
          <MapView
            scrollEnabled={false}
            loadingEnabled={true}
            zoomEnabled={false}
            style={styles.mapbox}
            region={{
              latitude: lat ? lat : 26.7605545,
              longitude: lng ? lng : 83.3731675,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {lat && lng && (
              <Marker
                coordinate={{
                  latitude: lat,
                  longitude: lng,
                }}
                title="Bus No. XX"
                description="UP53 XX XXXX"
              />
            )}
          </MapView>
        </View>

        <View style={[styles.eta, styles.contentBox]}>
          <Text style={styles.heading}>Time to reach</Text>
          <Text style={styles.content}>{ETA}</Text>
        </View>
      </View>

      {/* right */}
      <View style={styles.right}>
        <View style={[styles.route, styles.contentBox]}>
          <Text style={styles.heading}>Route</Text>
          <Text style={styles.content}>{route}</Text>
        </View>

        <View style={[styles.stops]}>
          <View
            style={{
              height: "50%",
            }}
          >
            <Text style={styles.heading}>Last Stop</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="middle"
              style={styles.content}
            >
              {lastStop}
            </Text>
          </View>

          <View
            style={{
              height: "50%",
            }}
          >
            <Text style={styles.heading}>Next Stop</Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="middle"
              style={styles.content}
            >
              {nextStop}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.trackBtn]}
          onPress={handleMapTouch}
        >
          <FontAwesome6
            name="location-arrow"
            size={24}
            color="#7abd23"
          />
          <Text
            style={{
              fontFamily: "Poppins_600",
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
    width: Dimensions.get("screen").width - 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("screen").height / 3,
    backgroundColor: "#36363610",
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
    backgroundColor: "#f0f0f0",
    fontFamily: "Poppins_500",
    borderRadius: 5,
    // height: 60 || "auto",
    padding: 10,
    justifyContent: "center",
  },

  heading: {
    fontFamily: "Poppins_500",
    fontSize: 12,
    color: "#00000090",
    lineHeight: 16,
    height: "50%",
    // backgroundColor: "blue",
  },

  content: {
    color: "#000000",
    fontFamily: "Poppins_600",
    fontSize: 14,
    lineHeight: 18,
    height: "50%",
    // backgroundColor: "red",
  },

  map: {
    flex: 4,
    borderRadius: 5,
    overflow: "hidden",
  },
  mapbox: {
    width: "100%",
    height: "100%",
  },

  eta: {
    flex: 1,
  },

  route: {
    flex: 1,
  },

  stops: {
    flex: 2,
    backgroundColor: "#f0f0f0",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 5,
    gap: 5,
  },

  trackBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#a5ff3080",
  },

  shadow: {
    elevation: 10,
    shadowColor: "#333333",
  },
});
