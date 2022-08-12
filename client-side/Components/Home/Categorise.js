import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Categorise() {
  const Icons = [
    { Image: require("../../assets/pizza.png"), name: "Pizza" },
    { Image: require("../../assets/burger.png"), name: "Fast Food" },
    { Image: require("../../assets/rice.png"), name: "Rice" },
    { Image: require("../../assets/meat.png"), name: "Meat" },
    { Image: require("../../assets/pasta.png"), name: "Pasta" },
  ];
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView horizontal>
        {Icons.map((item) => {
          return (
            <View style={{ marginRight: 30, alignItems: "center" }}>
              <Image
                source={item.Image}
                style={{ width: 50, height: 40, resizeMode: "contain" }}
              />
              <Text style={{ textAlign: "center" }}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
