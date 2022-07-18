import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ComponentInfo({ navigation, ...props }) {
  return (
    <View
      style={{
        // width: 300,
        // borderRadius: 15,
        backgroundColor: "white",
        // justifyContent: "center",
        // alignSelf: "center",
        marginTop: 15,
        // shadowColor: "black",
        // shadowOpacity: 10,
        // shadowRadius: 10,
        padding: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RestaurantDetails", {
            RestaurantName: props.name,
            RestaurantLogo: props.uri,
          });
        }}
      >
        <ComponentImage uri={props.uri} />
        <ComponentShortInfo name={props.name} />
      </TouchableOpacity>
    </View>
  );
}

const ComponentImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{ width: "100%", height: 180, resizeMode: "contain" }}
      />

      <TouchableOpacity style={{ top: 20, right: 20, position: "absolute" }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="black" />
      </TouchableOpacity>
    </>
  );
};

const ComponentShortInfo = (props) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
    </View>
  );
};
