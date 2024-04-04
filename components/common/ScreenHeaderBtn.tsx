import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

interface iconProps {
  iconUrl: string;
  dimension: string;
  handlePress: () => void;
}

const ScreenHeaderBtn: React.FC<iconProps> = ({
  iconUrl,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={handlePress}
    >
      <Image
        source={{ uri: iconUrl }}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
  }),
});
