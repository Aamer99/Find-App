import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Divider } from "react-native-elements";

export default function About(props) {
  return (
    <ScrollView>
      <Img uri={props.route.params.PlaceLogo} />
      <Title title={props.route.params.PlaceName} />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <Description description={props.description} />
      <Menu ImageURL={props.route.params.PlaceMnue} />
      <Location latitude={props.latitude} longitude={props.longitude} />
    </ScrollView>
  );
}

const Img = (props) => {
  return (
    <Image source={{ uri: props.uri }} style={{ width: "100%", height: 180 }} />
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
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: 300,
          height: 300,
        }}
        initialRegion={initialPosition}
        zoomEnabled={false}
        onPress={() =>
          Linking.openURL("googlemaps://app?&daddr=21.376647,39.903188")
        }
      >
        <Marker coordinate={initialPosition} />
      </MapView>
    </View>
  );
};
