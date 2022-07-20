import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [Search, SetSearch] = useState("");

  function onSubmit() {
    const search = Search.toUpperCase();
    props.SearchHandler(search);
  }
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: "#eee",
        borderRadius: 20,
        height: 50,
        justifyContent: "space-between",
      }}
    >
      <TextInput
        placeholder="Search"
        style={{
          marginLeft: 10,
          mainWidth: "70%",
          borderRadius: 20,
          width: "70%",
        }}
        onChangeText={SetSearch}
        value={Search}
      />
      <View style={{ marginRight: 8, flexDirection: "row" }}>
        <Pressable
          style={{
            height: 30,
            width: 80,
            backgroundColor: "white",
            borderRadius: 20,
            margin: 10,
          }}
          onPress={onSubmit}
        >
          <Text style={{ margin: 5, textAlign: "center" }}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
}
