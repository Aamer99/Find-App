import { View, Text } from "react-native";
import React from "react";
import About from "../Components/Restaurant-Detail/About";

export default function RestaurantDetail({ route, navigation }) {
  // we well get data from the database to heare by using the name of restuerent (route.params.RestaurantName)
  return (
    <View>
      <About
        description={route.params.RestaurantName}
        latitude="24.466555"
        longitude="39.591470"
        MenuURL="https://www.adobe.com/express/create/media_1393188a9227b5933bce13dddac375418fee10507.jpeg?width=400&format=jpeg&optimize=medium"
        route={route}
      />
    </View>
  );
}
