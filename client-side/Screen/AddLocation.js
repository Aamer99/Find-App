import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import AddPlaceForm from "../Components/Add-Place/addPlaceForm";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function AddLoaction({ navigation }) {
  const [placeCoordinate, setPlaceCoordinate] = useState(null);
  const [showMarker, setShowMaker] = useState(false);
  const [CoordinateMarker, setCoordinateMarkier] = useState({
    latitude: 0,
    longitude: 0,
  });
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

  return (
    <ScrollView>
      <View style={{ marginBottom: 70 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            //width: Dimensions.get("window").width,
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
        <AddPlaceForm
          navigation={navigation}
          placeCoordinate={placeCoordinate}
          setCoordinateMarkier={setCoordinateMarkier}
          setPlaceCoordinate={setPlaceCoordinate}
        />
      </View>
    </ScrollView>
  );
}
