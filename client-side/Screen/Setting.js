import React from "react";
import { View, Text, Pressable } from "react-native";

export default function Setting({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        top: 30,

        margin: 30,
      }}
    >
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "red",
          width: "100%",
          height: 50,
        }}
      >
        <Pressable
          onPress={() => {
            alert("clicked on language");
          }}
        >
          <Text style={{ marginVertical: 15 }}>Language</Text>
        </Pressable>
      </View>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "red",
          width: "100%",
          height: 50,
        }}
      >
        <Pressable
          onPress={() => {
            alert("clicked on language");
          }}
        >
          <Text style={{ marginVertical: 15 }}>Feedback</Text>
        </Pressable>
      </View>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "red",
          width: "100%",
          height: 50,
        }}
      >
        <Pressable
          onPress={() => {
            alert("clicked on language");
          }}
        >
          <Text style={{ marginVertical: 15 }}>Contactus</Text>
        </Pressable>
      </View>
    </View>
  );
}
