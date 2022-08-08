import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import AddPlaceForm from "../Components/Add-Place/addPlaceForm";

export default function AddLoaction({ navigation }) {
  return (
    <View
    // style={{
    //   backgroundColor: "#eee",
    //   flex: 1,
    //   top: 30,
    //   // alignItems: "center",
    //   // justifyContent: "center",
    // }}
    >
      {/* <ScrollView> */}
      <AddPlaceForm navigation={navigation} />
      {/* </ScrollView> */}
    </View>
  );
}
