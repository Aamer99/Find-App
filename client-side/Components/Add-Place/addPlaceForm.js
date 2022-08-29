import React, { memo, useState } from "react";
import { View, StyleSheet, ImagePickerIOS } from "react-native";
import { Input, Button } from "react-native-elements";
import { CheckBox } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";

import RNPickerSelect from "react-native-picker-select";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import AddCategorise from "./AddCategorise";
import AddMnue from "./AddMnue";
function AddPlaceForm({ navigation }) {
  const [placeName, setPlaceName] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState(true);
  const [image, setImage] = useState("");
  const [cities, setCities] = useState([{ label: "Madina", value: "Madina" }]);
  const [city, setCity] = useState("");
  const [placeType, setPlaceType] = useState("");
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  const [showCategories, setShowCategories] = useState(false);
  const [showAddCategorise, setShowAddCategorise] = useState(false);
  const [showAddMnue, setShowAddMnue] = useState(false);
  const selectedCategories = [];
  const checkType = (i) => {
    const type = i + 1;
    if (type == 1) {
      setChecked(type);
      setPlaceType("Restaurant");
      setShowCategories(true);
    } else if (type == 2) {
      setChecked(type);
      setPlaceType("Coffe");
      setShowCategories(false);
    }
  };
  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      alert(JSON.stringify(result.uri));
    }
  };

  async function addPlace() {
    try {
      const placeInfo = {
        name: placeName,
        logo: "https://cache.dominos.com/olo/6_91_5/assets/build/images/promo/dominos_social_logo.jpg",
        mnue: "https://pbs.twimg.com/media/Cp4yRhDWIAEnEEw.jpg",
        city: city,
        type: placeType,
        PlaceLocation: placeCoordinate,
      };

      const respons = await axios.post(
        "http://192.168.1.21:4000/place/addPlace",
        placeInfo
      );
      if (respons.status == 200) {
        navigation.navigate("Home");
        setCity(null);
        setPlaceName("");
        setCoordinateMarkier({ latitude: 0, longitude: 0 });
        setPlaceCoordinate(null);
        setChecked(0);
      } else {
        alert("not work");
      }
    } catch (err) {
      alert("error in all function add place " + err);
    }
  }
  return (
    <View
      style={{
        borderRadius: 35,
        borderWidth: 0.5,
        width: "100%",
        marginTop: -90,
        backgroundColor: "white",
        padding: 30,
        backgroundColor: "#eee",
      }}
    >
      <Input placeholder="Place Name " onChangeText={setPlaceName} />

      {["Resturent", "Coffe"].map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ borderWidth: 0, backgroundColor: "#eee" }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked === i + 1}
          onPress={() => checkType(i)}
        />
      ))}
      {showCategories && (
        <Button
          title="Select Categoris"
          onPress={() => {
            setShowAddCategorise(true);
          }}
        />
      )}
      <AddCategorise
        Visible={showAddCategorise}
        selectedCategories={selectedCategories}
        setShowAddCategorise={setShowAddCategorise}
      />
      <AddMnue showAddMnue={showAddMnue} setShowAddMnue={setShowAddMnue} />
      <RNPickerSelect
        onValueChange={setCity}
        items={cities}
        value={city}
        style={pickerSelectStyles}
        placeholder={selectPlaceholder}
        Icon={() => {
          return <Feather name="map-pin" size={22} />;
        }}
      />

      <Button
        title="Add Mnue"
        icon={{
          name: "add-a-photo",
          type: "MaterialIcons",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "gray",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 60,
          marginVertical: 10,
        }}
        onPress={() => {
          setShowAddMnue(true);
        }}
      />

      {/* <Text>Add Logo</Text>
          <Button title="Add Logo" onPress={handelChoiseImage} /> */}
      <Button
        title="Add Logo"
        icon={{
          name: "add-a-photo",
          type: "MaterialIcons",
          size: 15,
          color: "white",
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "gray",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 60,
          marginVertical: 10,
        }}
      />
      <Button
        title="add"
        // buttonStyle={{
        //   width: "90%",
        //   height: 50,
        //   marginTop: 30,
        //   marginBottom: 30,
        // }}
        buttonStyle={{
          backgroundColor: "green",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
          marginTop: 20,
        }}
        onPress={addPlace}
      />
    </View>
    // </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,

    color: "black",
    paddingLeft: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10,
    width: "95%",
  },
  iconContainer: {
    top: 15,
    left: 15,
  },
});

export default memo(AddPlaceForm);
