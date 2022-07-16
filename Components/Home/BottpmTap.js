import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
export default function BottpmTap() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon name="home" title="Home" />
      <Icon name="heart" title="Favorite" />
      <Icon name="user" title="Account" />
    </View>
  );
}

const Icon = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        alert(props.title);
      }}
    >
      <View>
        <FontAwesome5
          name={props.name}
          size={25}
          style={{ marginTop: 3, alignSelf: "center" }}
        />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
