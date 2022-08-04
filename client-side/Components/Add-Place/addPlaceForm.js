import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { CheckBox } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
export default function AddPlaceForm(props) {
  const [placeName, setPlaceName] = useState("");
  const [checked, setChecked] = useState(false);
  const [image, setImage] = useState("");
  const initialPosition = {
    latitude: "24.5246542",
    longitude: "39.5691841",
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

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          width: "98%",
          padding: 20,
          borderColor: "black",
          borderRadius: 35,
          borderWidth: 2,
          marginBottom: 20,
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
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            width: 300,
            height: 300,
          }}
          initialRegion={initialPosition}
          zoomEnabled={false}
        >
          <Marker coordinate={initialPosition} />
        </MapView>
      </View>
    </View>
  );
}
