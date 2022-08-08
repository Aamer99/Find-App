import React, { useState } from "react";
import { View, Text, ScrollView, Linking, Dimensions } from "react-native";
import { Input, Button } from "react-native-elements";
import { CheckBox } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
export default function AddPlaceForm(props) {
  const [placeName, setPlaceName] = useState("");
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("");

  const [showMarker, setShowMaker] = useState(false);
  const [placeCoordinate, setPlaceCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });

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

    const location = {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    };
    setPlaceCoordinate(location);
    setShowMaker(true);
  }
  return (
    <View style={{ width: "80%" }}>
      <View
        style={{
          padding: 20,
          borderColor: "black",
          borderRadius: 35,
          borderWidth: 2,
          width: 300,
          margin: 30,
        }}
      >
        <Input placeholder="Place Name " onChangeText={setPlaceName} />
        <Text>Place Type</Text>
        {["resturent", "coffe"].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ borderWidth: 0, backgroundColor: "#eee" }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => setChecked(i + 1)}
          />
        ))}
        <Text>Add Mnue </Text>
        <Button title="Add Mune" onPress={handelChoiseImage} />
        <Text>Add Logo</Text>
        <Button title="Add Logo" onPress={handelChoiseImage} />
      </View>
      <View
        style={{
          width: "90%",
          padding: 20,
        }}
      >
        <MapView
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
        </MapView>
      </View>
      <View
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
      </View>
    </View>
  );
}
