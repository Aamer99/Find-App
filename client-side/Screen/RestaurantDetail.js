import { View, Text } from "react-native";
import React from "react";
import About from "../Components/Restaurant-Detail/About";

export default function RestaurantDetail({ route, navigation }) {
  // we well get data from the database to heare by using the name of restuerent (route.params.RestaurantName)
  return (
    <View>
      <About route={route} />
    </View>
  );
}
