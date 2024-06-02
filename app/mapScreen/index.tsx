import { BackHandler, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, Polyline } from "react-native-maps";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import busRouteData from "@/constants/busRouteData";
import { Entypo, FontAwesome, Octicons } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const MapScreen = () => {
  const { latitude, longitude, id, busNo }: any = useLocalSearchParams();
  const [loc, setLoc] = useState<string>("-");
  const [nextStop, setNextStop] = useState<string>("");

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

  const snapPoints = useMemo(() => ["25%", "75%"], []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mapBox}>
        <MapView
          showsUserLocation={true}
          userLocationUpdateInterval={5000}
          mapType="terrain"
          userInterfaceStyle="dark"
          loadingEnabled={true}
          style={styles.mapbox}
          initialRegion={{
            latitude: latitude ? Number(latitude) : 26.7605545,
            longitude: longitude ? Number(longitude) : 83.3731675,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* <Marker
            coordinate={{
              latitude: 26.7605545,
              longitude: 83.3731675,
            }}
            title="Bus No. XX"
            description="UP53 XX XXXX"
          /> */}

          {busRouteData?.map((bus: any, index: number) => {
            return (
              index == id &&
              bus?.busData?.stops?.map((stop: any, index: any) => {
                return (
                  <Marker
                    onPress={() => {
                      setLoc(stop.location);
                      setNextStop(bus?.busData?.stops[index + 1]?.location);
                    }}
                    key={`${bus.id}-${index}`}
                    coordinate={{
                      latitude: stop.coordinates.latitude,
                      longitude: stop.coordinates.longitude,
                    }}
                    title={stop.location}
                    description={`Bus: ${bus.busData.busNumber}, Route: ${bus.busData.route}`}
                  >
                    <Octicons
                      name="location"
                      size={24}
                      color="#3c3c3c"
                    />
                  </Marker>
                );
              })
            );
          })}

          {busRouteData?.map((bus: any, index: any) => {
            return (
              index == id &&
              bus?.busData?.stops?.map((stop: any, index: any) => {
                return (
                  <Polyline
                    key={index}
                    coordinates={bus?.busData?.stops?.map((stop: any) => ({
                      latitude: stop.coordinates.latitude,
                      longitude: stop.coordinates.longitude,
                    }))}
                    strokeColor="#4500ff"
                    strokeWidth={6}
                  />
                );
              })
            );
          })}

          {latitude && longitude && (
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

      <BottomSheet
        snapPoints={snapPoints}
        enableOverDrag={true}
        style={{
          flex: 1,
          overflow: "scroll",
        }}
      >
        <BottomSheetScrollView>
          {busRouteData?.map((bus: any, index: any) => {
            return (
              index == id &&
              bus?.busData?.stops?.map((stop: any, index: any) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      paddingLeft: 10,
                      paddingBottom: 10,
                    }}
                  >
                    <FontAwesome
                      name="dot-circle-o"
                      size={
                        stop.location == loc || stop.location == nextStop
                          ? 24
                          : 20
                      }
                      color="black"
                    />
                    <Entypo
                      name="flow-line"
                      size={24}
                      color="black"
                    />
                    <Text
                      style={[
                        {
                          fontFamily:
                            stop.location == loc || stop.location == nextStop
                              ? "Poppins_600"
                              : "Poppins_400",
                          fontSize: 16,
                          paddingLeft: 10,
                        },
                      ]}
                    >
                      {stop.location}
                    </Text>
                  </View>
                );
              })
            );
          })}
        </BottomSheetScrollView>
      </BottomSheet>
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
