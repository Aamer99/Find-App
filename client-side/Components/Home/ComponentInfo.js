import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ComponentInfo({ navigation, ...props }) {
  return (
    <View
      style={{
        // width: 300,
        // borderRadius: 15,
        backgroundColor: "gray",
        // justifyContent: "center",
        // alignSelf: "center",
        margin: 10,
        // shadowColor: "black",
        // shadowOpacity: 10,
        // shadowRadius: 10,
        // padding: 30,
        borderRadius: 35,
        height: 200,
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
        <ComponentImage
          uri={props.uri}
          heartIconColor={props.heartIconColor}
          heartIconName={props.heartIconName}
        />
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
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 35,
          opacity: 0.7,
        }}
      />

      <TouchableOpacity style={{ top: 20, right: 20, position: "absolute" }}>
        <MaterialCommunityIcons
          name={props.heartIconName}
          size={25}
          color={props.heartIconColor}
        />
      </TouchableOpacity>
    </>
  );
};

const ComponentShortInfo = (props) => {
  return (
    <View
      style={{ marginTop: 5, position: "absolute", bottom: "15%", left: "5%" }}
    >
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
    </View>
  );
};
