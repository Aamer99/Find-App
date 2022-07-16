import { View, Text } from "react-native";
import React from "react";
import About from "../Components/Restaurant-Detail/About";
import { Divider } from "react-native-elements";

export default function RestaurantDetail() {
  return (
    <View>
      <Divider width={2} style={{ marginVertical: 20 }} />
      <About />
    </View>
  );
}
