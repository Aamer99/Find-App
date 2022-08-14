import axios from "axios";
import React, { useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { View, Text, ActivityIndicator } from "react-native";
import PlaceContainer from "./PlaceContiner";

export default function Restaurant({ navigation, ...props }) {
  // const [data, setData] = useState([]);
  const [activeLodaing, setActiveLodaing] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const places = await axios.post("http://192.168.1.21:4000/place", {
          city: props.userCity,
          type: "Restaurant",
        });
        if (places.status === 200) {
          props.setData(places.data);
          setActiveLodaing(false);
        } else {
          alert("err and " + places.status);
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  });

  return (
    <View>
      {!props.showSearch && !props.showByCategorise && (
        <PlaceContainer places={props.data} navigation={navigation} />
      )}

      {props.showSearch && !props.showByCategorise && (
        <>
          {props.Search.length === 0 && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50%",
              }}
            >
              <Entypo name="emoji-sad" size={50} color="gray" />
              <Text style={{ margin: 10, color: "gray" }}>
                Sorry we can't find what you search for it
              </Text>
            </View>
          )}
          {props.Search.length != 0 && (
            <PlaceContainer places={props.Search} navigation={navigation} />
          )}
        </>
      )}

      {props.showByCategorise && (
        <PlaceContainer places={props.categorise} navigation={navigation} />
      )}

      {activeLodaing && (
        <>
          <ActivityIndicator
            size="large"
            style={{ marginTop: "50%" }}
            color="black"
          />
        </>
      )}
    </View>
  );
}
