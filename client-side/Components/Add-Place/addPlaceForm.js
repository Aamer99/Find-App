import React, { memo, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button, Divider } from "react-native-elements";
import { CheckBox } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import AddCategories from "./AddCategories";
import AddItem from "./Add-Item";
import MnueList from "./MnueList";

function AddPlaceForm({ navigation, ...props }) {
  const [placeName, setPlaceName] = useState("");
  const [checked, setChecked] = useState(false);

  const [cities, setCities] = useState([{ label: "Medina", value: "Medina" }]);
  const [city, setCity] = useState("");
  const [placeType, setPlaceType] = useState("");
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  const [showCategories, setShowCategories] = useState(false);
  const [showAddCategories, setShowAddCategories] = useState(false);
  const [showAddMnue, setShowAddMnue] = useState(false);
  const [mnue, setMnue] = useState([]);

  const [categories, setCategories] = useState([]);
  const [placeLogo, setPlaceLogo] = useState([]);

  const checkType = (i) => {
    const type = i + 1;
    if (type == 1) {
      setChecked(type);
      setPlaceType("Restaurant");
      setShowCategories(true);
    } else if (type == 2) {
      setChecked(type);
      setPlaceType("Coffee");
      setShowCategories(false);
    }
  };
  const handelChoiceImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const data = new FormData();

      data.append("placeLogo", {
        uri: result.uri,
        type: result.type,
        name:
          result.fileName || result.uri.substr(result.uri.lastIndexOf("/") + 1),
      });

      const upload = await axios.post(
        "http://172.20.10.14:4000/place/uploadeLogo",
        data
      );
      if (upload.status === 200) {
        setPlaceLogo(upload.data);
        alert(upload.data);
      } else
        (err) => {
          alert(err);
        };
    }
  };

  async function addPlace() {
    try {
      const placeInfo = {
        name: placeName,
        logo: placeLogo,
        mnue: JSON.stringify(mnue),
        city: city,
        type: placeType,
        PlaceLocation: props.placeCoordinate,
        categories: JSON.stringify(categories[0]),
      };
      const response = await axios.post(
        "http://172.20.10.14:4000/place/addPlace",
        placeInfo
      );
      if (response.status == 200) {
        navigation.navigate("Home");
        setCity(null);
        setPlaceName("");
        props.setCoordinateMarker({ latitude: 0, longitude: 0 });
        props.setPlaceCoordinate(null);
        setChecked(0);
        const empty = [];
        setCategories(...empty);
        setMnue(...empty);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View
      style={{
        borderTopStartRadius: 35,
        borderTopEndRadius: 35,
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        width: "100%",
        marginTop: -90,
        padding: 30,
        backgroundColor: "#eee",
      }}
    >
      <Input placeholder="Place Name " onChangeText={setPlaceName} />

      {["Restaurant", "Coffee"].map((l, i) => (
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
          title="Select Categoric"
          onPress={() => {
            setShowAddCategories(true);
          }}
        />
      )}
      <AddCategories
        Visible={showAddCategories}
        categories={categories}
        setCategories={setCategories}
        setShowAddCategories={setShowAddCategories}
      />
      <AddItem
        showAddMnue={showAddMnue}
        setShowAddMnue={setShowAddMnue}
        setMnue={setMnue}
        mnue={mnue}
      />
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
        onPress={handelChoiceImage}
      />
      <Button
        title="Add Item"
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
      <Divider width={2} style={{ marginVertical: 20 }} />
      {mnue.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setShowAddMnue(true);
            }}
          >
            <MnueList
              itemName={item.itemName}
              itemDescription={item.itemDescription}
              itemPrice={item.itemPrice}
              key={index}
            />
          </TouchableOpacity>
        );
      })}

      <Divider width={2} style={{ marginVertical: 20 }} />
      <Button
        title="add"
        buttonStyle={{
          backgroundColor: "green",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
          marginTop: 20,
          marginBottom: 40,
        }}
        onPress={() => addPlace()}
      />
    </View>
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
