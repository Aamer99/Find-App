import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function BottpmTap({ navigation, ...props }) {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon
        name={props.ActiveHome == true ? "home" : "home-outline"}
        title="Home"
        navigation={navigation}
      />
      <Icon
        name={props.ActiveFavorite == true ? "heart" : "heart-outline"}
        title="Favorite"
        navigation={navigation}
      />
      <Icon
        name={props.ActiveAccount == true ? "person" : "person-outline"}
        title="Account"
        navigation={navigation}
      />
    </View>
  );
}

const Icon = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.title == "Account") {
          props.navigation.navigate("Account");
        }
        if (props.title == "Home") {
          props.navigation.navigate("Home");
        }
        if (props.title == "Favorite") {
          props.navigation.navigate("Favorite");
        }
      }}
    >
      <View>
        <Ionicons
          name={props.name}
          size={20}
          style={{ marginTop: 3, alignSelf: "center" }}
        />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
