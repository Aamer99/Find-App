import React, { memo, useState } from "react";
import { ScrollView, View } from "react-native";
import AddPlaceForm from "../Components/Add-Place/addPlaceForm";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

function AddPlace({ navigation }) {
  const [placeCoordinate, setPlaceCoordinate] = useState(null);
  const [showMarker, setShowMaker] = useState(false);
  const [CoordinateMarker, setCoordinateMarker] = useState({
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
    setCoordinateMarker(CoordinateMarker);
    setShowMaker(true);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginBottom: 70 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            height: 500,
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
          setCoordinateMarker={setCoordinateMarker}
          setPlaceCoordinate={setPlaceCoordinate}
        />
      </View>
    </ScrollView>
  );
}

export default memo(AddPlace);
