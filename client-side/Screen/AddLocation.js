import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import AddPlaceForm from "../Components/Add-Place/addPlaceForm";

export default function AddLoaction() {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        top: 30,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <ScrollView>
        <AddPlaceForm />
      </ScrollView>
    </View>
  );
}
