import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import ComponentInfo from "./ComponentInfo";

export default function Restaurant(props) {
  return (
    <View>
      <ComponentInfo
        uri="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/640px-Burger_King_1969_logo.svg.png"
        name={"burger king"}
        // navigation={navigation}
        heartIconName={"cards-heart-outline"}
        heartIconColor={"black"}
      />
      <ComponentInfo
        uri="https://i.pinimg.com/736x/c7/84/67/c78467db9ff497393cb548a48f02d451.jpg"
        name={"McDonald's"}
        // navigation={navigation}
        heartIconName={"cards-heart-outline"}
        heartIconColor={"black"}
      />
    </View>
  );
}
