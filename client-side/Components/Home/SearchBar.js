import { View, Text, TextInput, Pressable } from "react-native";
import React, { memo, useState } from "react";
import axios from "axios";

function SearchBar(props) {
  // const [Search, SetSearch] = useState("");

  async function onSubmit() {
    try {
      const searchTerm = props.Search.toUpperCase();
      props.setenableBtnSearch(false);
      if (props.section == "Coffe") {
        const search = await axios.post(
          `http://192.168.1.22:4000/place/search/${searchTerm}`,
          { userCity: props.userCity, placeType: "Coffe" }
        );
        if (search.status === 200) {
          props.setShowSearchResualt(true);
          props.SearchHandler(search.data);
        } else {
          alert("erro hi ");
        }
      } else if (props.section == "Restaurant") {
        const search = await axios.post(
          `http://192.168.1.22:4000/place/search/${searchTerm}`,
          { userCity: props.userCity, placeType: "Restaurant" }
        );
        if (search.status === 200) {
          props.setShowSearchResualt(true);
          props.SearchHandler(search.data);
        } else {
          alert("erro hi ");
        }
      }
    } catch (error) {
      alert(error);
    }
  }
  function cansel() {
    props.SetSearch("");
    props.SearchHandler([]);
    props.setShowSearchResualt(false);
    props.setenableBtnSearch(true);
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
        onChangeText={props.SetSearch}
        value={props.Search}
      />
      {props.enableBtnSearch && (
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
            disabled={props.Search == "" ? true : false}
          >
            <Text style={{ margin: 5, textAlign: "center" }}>Search</Text>
          </Pressable>
        </View>
      )}

      {!props.enableBtnSearch && (
        <View style={{ marginRight: 8, flexDirection: "row" }}>
          <Pressable
            style={{
              height: 30,
              width: 80,
              backgroundColor: "red",
              borderRadius: 20,
              margin: 10,
            }}
            onPress={cansel}
          >
            <Text style={{ margin: 5, textAlign: "center" }}>cansel</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default memo(SearchBar);
