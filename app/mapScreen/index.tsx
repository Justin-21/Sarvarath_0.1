import { BackHandler, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import busRouteData from "@/constants/busRouteData";

const MapScreen = () => {
  const { latitude, longitude } = useLocalSearchParams();
  // console.log(latitude, longitude);

  useEffect(() => {
    const backAction = () => {
      router.back();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mapBox}>
        <MapView
          showsUserLocation={true}
          userLocationUpdateInterval={5000}
          userInterfaceStyle="dark"
          showsTraffic={true}
          loadingEnabled={true}
          style={styles.mapbox}
          initialRegion={{
            latitude: latitude ? Number(latitude) : 26.7605545,
            longitude: longitude ? Number(longitude) : 83.3731675,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 26.7605545,
              longitude: 83.3731675,
            }}
            title="Bus No. XX"
            description="UP53 XX XXXX"
          />

          {busRouteData.map((bus) =>
            bus.busData.stops.map((stop, index) => (
              <Marker
                key={`${bus.id}-${index}`}
                coordinate={{
                  latitude: stop.coordinates.latitude,
                  longitude: stop.coordinates.longitude,
                }}
                title={stop.location}
                description={`Bus: ${bus.busData.busNumber}, Route: ${bus.busData.route}`}
              />
            ))
          )}

          {latitude && (
            <Marker
              coordinate={{
                latitude: Number(latitude),
                longitude: Number(longitude),
              }}
              title="Bus No. XX"
              description="UP53 XX XXXX"
            />
          )}
        </MapView>
      </View>

      {/* create a list scroll view to show all the routes of the buses and the actual location of the bus at the moment */}

      <View style={styles.detailsBox}>
        <View style={styles.busDetails}>
          <Text style={[styles.heading, { color: "#0e0e0e", borderWidth: 0 }]}>
            Bus Number
          </Text>
          <Text style={[styles.content, { color: "black", borderWidth: 0 }]}>
            UP53 XX XXXX
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View style={styles.contentBox}>
            <Text style={styles.heading}>Time to reach</Text>
            <Text style={styles.content}>5 mins</Text>
          </View>

          <View style={styles.contentBox}>
            <Text style={styles.heading}>Next Stop</Text>
            <Text style={styles.content}>Amrud Mandi</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapBox: {
    backgroundColor: "red",
    flex: 3,
  },

  detailsBox: {
    backgroundColor: "#0a0a0a",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  mapbox: {
    width: "100%",
    height: "100%",
  },

  busDetails: {
    width: "100%",
    backgroundColor: "#ffd700",
    fontFamily: "Poppins_500",
    borderRadius: 20,
    // maxHeight: 60,
    padding: 16,
    justifyContent: "center",
  },

  contentBox: {
    flex: 1,
    fontFamily: "Poppins_500",
    borderRadius: 12,
    // maxHeight: 60,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#4396e890",
  },

  heading: {
    fontFamily: "Poppins_500",
    fontSize: 14,
    color: "#45a2ff",
  },

  content: {
    color: "#45a2ff",
    fontFamily: "Poppins_700",
    fontSize: 16,
  },
});
