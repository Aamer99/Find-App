import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Divider } from "react-native-elements";

export default function About(props) {
  // const [CoordinateMarker, setCoordinateMarkier] = useState(null);
  // const [initialRegion, setInitialRegion] = useState(null);
  // const SetCoordinateMarkier = () => {
  //   const OldCoordinate = props.route.params.PlaceLocation;
  //   const CoordinateMarker = OldCoordinate.split(",");
  //   const newCoordinateMarker = {
  //     latitude: CoordinateMarker[0],
  //     longitude: CoordinateMarker[1],
  //   };

  //   setCoordinateMarkier(newCoordinateMarker);
  //   setInitialRegion(initialRegion);
  // };

  // SetCoordinateMarkier();
  const initialRegion = {
    latitude: 24.470901,
    longitude: 39.612236,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <ScrollView>
      <Img uri={props.route.params.PlaceLogo} />
      <View
        style={{
          marginTop: "-3%",
          backgroundColor: "#eee",
          borderTopRightRadius: 45,
          borderWidth: 2,
          paddingTop: 10,
        }}
      >
        <Title title={props.route.params.PlaceName} />
        <Divider width={2} style={{ marginVertical: 20 }} />
        <Description description={props.description} />
        <Menu ImageURL={props.route.params.PlaceMnue} />
        <Location
          initialRegion={initialRegion}
          Location={props.route.params.PlaceLocation}
        />
      </View>
    </ScrollView>
  );
}

const Img = (props) => {
  return (
    <Image source={{ uri: props.uri }} style={{ width: "100%", height: 200 }} />
  );
};

const Title = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 20,
      }}
    >
      {props.title}
    </Text>
  );
};
const Description = (props) => {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: "400",
        marginHorizontal: 30,
        marginTop: 20,
      }}
    >
      {props.description}
    </Text>
  );
};

const Menu = (props) => {
  return (
    <View>
      <Image
        source={{ uri: props.ImageURL }}
        style={{
          width: 400,
          height: 400,
          resizeMode: "contain",
          marginBottom: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const Location = (props) => {
  //  this way is wrong check it (if sothing is wrong remove this and move it into out the component )
  const initialPosition = {
    latitude: props.latitude,
    longitude: props.longitude,
  };
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", margin: 20 }}
    >
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: 300,
          height: 200,
          justifyContent: "center",
          borderRadius: 35,
          borderWidth: 1,
          borderColor: "none",
        }}
        initialRegion={props.initialRegion}
        zoomEnabled={false}
        scrollEnabled={false}
        onPress={() =>
          Linking.openURL(`googlemaps://app?&daddr=${props.Location}`)
        }
      >
        <Marker coordinate={initialPosition} />
      </MapView>
    </View>
  );
};
