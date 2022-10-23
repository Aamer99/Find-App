import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { memo } from "react";

function ComponentInfo({ navigation, ...props }) {
  return (
    <View>
      <View
        style={{
          backgroundColor: "gray",
          margin: 10,
          borderRadius: 35,
          height: 200,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RestaurantDetails", {
              PlaceName: props.Place.name,
              PlaceLogo: props.Place.logo,
              PlaceMnue: props.Place.mnue,
              PlaceLocation: props.Place.location,
            });
          }}
        >
          <ComponentImage logo={props.Place.logo} />
          <ComponentShortInfo name={props.Place.name} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ComponentImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.logo,
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 35,
          opacity: 0.7,
          backgroundColor: "white",
        }}
      />
    </>
  );
};

const ComponentShortInfo = (props) => {
  return (
    <View
      style={{ marginTop: 5, position: "absolute", bottom: "15%", left: "5%" }}
    >
      <Text style={{ fontSize: 20, fontWeight: "400" }}>{props.name}</Text>
    </View>
  );
};

export default memo(ComponentInfo);
