import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { CheckBox } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import RNPickerSelect from "react-native-picker-select";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
export default function AddPlaceForm({ navigation }) {
  const [placeName, setPlaceName] = useState("");
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("");
  const [cities, setCities] = useState([{ label: "Madina", value: "Madina" }]);
  const [city, setCity] = useState("");
  const [placeType, setPlaceType] = useState("");
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  const [showMarker, setShowMaker] = useState(false);
  const [CoordinateMarker, setCoordinateMarkier] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [placeCoordinate, setPlaceCoordinate] = useState(null);

  const checkType = (i) => {
    const type = i + 1;
    if (type == 1) {
      setChecked(type);
      setPlaceType("Restaurant");
    } else if (type == 2) {
      setChecked(type);
      setPlaceType("Coffe");
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
    }
  };
  function coordinate(e) {
    const coordinate = e.nativeEvent.coordinate;
    const CoordinateMarker = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    };
    const location = coordinate.latitude + "," + coordinate.longitude;
    setPlaceCoordinate(location);
    setCoordinateMarkier(CoordinateMarker);
    setShowMaker(true);
  }

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
    <ScrollView>
      <View style={{ marginBottom: 70 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            width: Dimensions.get("window").width,
            height: 500,
            // borderRadius: 35,
            // borderWidth: 1,
            // borderColor: "black",
          }}
          initialRegion={{
            latitude: 24.470901,
            longitude: 39.612236,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          onPress={(e) => coordinate(e)}
        >
          {showMarker && (
            <>
              <Marker coordinate={CoordinateMarker} />
            </>
          )}
        </MapView>
        <View
          style={{
            // borderColor: "black",
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
          {/* <Text>Place Type</Text> */}
          {["resturent", "coffe"].map((l, i) => (
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
          {/* 
          <Text>Add Mnue </Text> */}
          {/* <Button title="Add Mune" onPress={handelChoiseImage} /> */}
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
      </View>

      <View
        style={{
          width: "90%",
          padding: 20,
        }}
      >
        {/* <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            width: 320,
            height: 600,
            borderRadius: 35,
            borderWidth: 1,
            borderColor: "black",
          }}
          initialRegion={{
            latitude: 24.470901,
            longitude: 39.612236,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          onPress={(e) => coordinate(e)}
        >
          {showMarker && (
            <>
              <Marker coordinate={placeCoordinate} />
            </>
          )}
        </MapView> */}
      </View>
      {/* <View
        style={{
          marginBottom: 200,
          marginTop: 30,
          padding: 20,
          width: 300,
          margin: 40,
        }}
      >
        <Button
          title="add"
          buttonStyle={{
            width: "90%",
            height: "40%",
          }}
        />
      </View> */}
    </ScrollView>
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
