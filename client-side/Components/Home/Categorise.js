import axios from "axios";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Categorise(props) {
  async function categorise(categoriseName) {
    try {
      const response = await axios.get(
        `http://192.168.1.21:4000/place/Categorise/${categoriseName}`
      );
      if (response.status == 200) {
        props.setCaegorise(response.data);
        props.setShowByCategorise(true);
      }
    } catch (error) {
      alert(error + "Catgorise component ");
    }
  }
  const Icons = [
    { Image: require("../../assets/pizza.png"), name: "Pizza" },
    { Image: require("../../assets/burger.png"), name: "Fast Food" },
    { Image: require("../../assets/rice.png"), name: "Rice" },
    { Image: require("../../assets/meat.png"), name: "Meat" },
    { Image: require("../../assets/pasta.png"), name: "Pasta" },
    { Image: require("../../assets/ramen.png"), name: "Chinese Food" },
    { Image: require("../../assets/chicken.png"), name: "Chicken" },
    { Image: require("../../assets/french-fries.png"), name: "Fries" },
    { Image: require("../../assets/sandwich.png"), name: "Sandwich" },
  ];
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 0.1,
        marginTop: 5,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Icons.map((item) => {
          return (
            <TouchableOpacity
              style={{ marginRight: 30, alignItems: "center", padding: 2 }}
              onPress={() => {
                categorise(item.name);
              }}
            >
              <Image
                source={item.Image}
                style={{ width: 50, height: 40, resizeMode: "contain" }}
              />
              <Text style={{ textAlign: "center" }}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
