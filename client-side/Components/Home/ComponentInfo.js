import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import axios from "axios";
export default function ComponentInfo({ navigation, ...props }) {
  const [isFavoritPlace, setFavoritPlace] = useState(false);
  const addToFavorit = async () => {
    try {
      const place = {
        placeID: props.id,
      };
      const addFavoritPlace = await axios.post(
        `http://192.168.8.102:4000/user/addFavoritResturent/7986680`,
        place
      );
      if (addFavoritPlace.status === 200) {
        setFavoritPlace(true);
      } else {
        alert("propblem in axios add place function");
      }
    } catch (err) {
      alert("error in add favorit place function");
    }
  };

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
            PlaceName: props.name,
            PlaceLogo: props.logo,
            PlaceMnue: props.mnue,
            PlaceLocation: props.location,
          });
        }}
      >
        <ComponentImage
          logo={props.logo}
          IconName={isFavoritPlace ? "heart" : "hearto"}
          IconColor={isFavoritPlace ? "red" : "black"}
          addToFavorit={addToFavorit}
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
          uri: props.logo,
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 35,
          opacity: 0.7,
        }}
      />

      <TouchableOpacity
        style={{ top: 20, right: 20, position: "absolute" }}
        onPress={props.addToFavorit}
      >
        <AntDesign name={props.IconName} size={25} color={props.IconColor} />
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
