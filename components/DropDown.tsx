import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

function DropDown() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<Array<object>>([
    { label: "GKP", value: "Gorakhpur" },
    { label: "VNS", value: "Varanasi" },
    { label: "DEL", value: "Delhi" },
    { label: "MUM", value: "Mumbai" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      placeholder="City"
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      showArrowIcon={false}
      showTickIcon={false}
      style={{
        borderWidth: 0,
        backgroundColor: "transparent",
        // backgroundColor: "white",
      }}
      containerStyle={{}}
      textStyle={{
        fontFamily: "Poppins_600",
        textAlign: "center",
      }}
      selectedItemContainerStyle={{
        backgroundColor: "#ffd70080",
      }}
      selectedItemLabelStyle={{
        fontFamily: "Poppins_700",
      }}
      dropDownContainerStyle={{
        borderWidth: 0,
      }}
      listItemContainerStyle={{
        borderWidth: 0,
      }}
    />
  );
}

export default DropDown;

const styles = StyleSheet.create({});
