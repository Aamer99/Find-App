import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import React, { memo } from "react";
import { Divider, Icon } from "react-native-elements";

function PlaceDetails({ route }) {
  return (
    <View>
      <PlaceLogo uri={route.params.PlaceLogo} />
      <View
        style={{
          marginTop: "-10%",
          backgroundColor: "#eee",
          borderTopRightRadius: 45,
          borderWidth: 2,
          paddingTop: 10,
          height: "100%",
        }}
      >
        <PlaceTitle
          title={route.params.PlaceName}
          Location={route.params.PlaceLocation}
        />
        <Divider width={2} style={{ marginVertical: 20 }} />
        <Description description={route.params.description} />
        <Menu mnue={route.params.PlaceMnue} />
      </View>
    </View>
  );
}

const PlaceLogo = (props) => {
  return (
    <Image
      source={{ uri: props.uri }}
      style={{ width: "100%", height: 300, backgroundColor: "white" }}
    />
  );
};

const PlaceTitle = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 29,
          fontWeight: "600",
          margin: 10,
        }}
      >
        {props.title}
      </Text>
      <TouchableOpacity
        style={{ margin: 20 }}
        onPress={() => {
          Linking.openURL(`googlemaps://app?&daddr=${props.Location}`);
        }}
      >
        <Icon name="location-outline" type="ionicon" size={35} />
      </TouchableOpacity>
    </View>
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
    <ScrollView showsHorizontalScrollIndicator={false}>
      {props.mnue.map((item) => {
        return (
          <View
            style={{
              width: "100%",
              height: 100,

              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <View style={{ margin: 10, padding: 5 }}>
              <Text style={{ fontSize: 19, fontWeight: "500" }}>Item.Name</Text>
              <Text style={{ margin: 5, fontSize: 15, fontWeight: "300" }}>
                item.description
              </Text>
              <Text style={{ margin: 5, fontSize: 14, fontWeight: "200" }}>
                item.price
              </Text>
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default memo(PlaceDetails);
