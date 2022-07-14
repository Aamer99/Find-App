import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HomeHeader() {
  const [ActiveTap, SetActiveTap] = useState("Coffe");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <Section
        text="Coffe"
        BtnColor="black"
        TextColor="white"
        ActiveTap={ActiveTap}
        SetActiveTap={SetActiveTap}
      />
      <Section
        text="Restaurant"
        BtnColor="white"
        TextColor="black"
        ActiveTap={ActiveTap}
        SetActiveTap={SetActiveTap}
      />
    </View>
  );
}

const Section = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.ActiveTap == props.text ? "black" : "white",
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 40,
      }}
      onPress={() => {
        props.SetActiveTap(props.text);
      }}
    >
      <Text
        style={{
          color: props.ActiveTap == props.text ? "white" : "black",
          fontSize: 13,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
