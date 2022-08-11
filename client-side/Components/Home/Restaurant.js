import axios from "axios";
import React, { useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { View, Text, ActivityIndicator } from "react-native";
import ComponentInfo from "./ComponentInfo";

export default function Restaurant({ navigation, ...props }) {
  const [data, setData] = useState([]);
  const [activeLodaing, setActiveLodaing] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post("http://192.168.1.21:4000/place", {
          city: props.userCity,
          type: "Restaurant",
        });
        if (response.status === 200) {
          setData(response.data);
          setActiveLodaing(false);
        } else {
          alert("err and " + response.status);
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  });
  return (
    <View>
      {!props.showSearch && (
        <>
          {data.map((item) => {
            return (
              <ComponentInfo
                logo={item.logo}
                name={item.name}
                navigation={navigation}
                heartIconName={"cards-heart-outline"}
                heartIconColor={"black"}
                id={item.id}
                mnue={item.mnue}
                location={item.location}
                FavoritPlace={false}
              />
            );
          })}
        </>
      )}

      {props.showSearch && (
        <>
          {props.Search.length === 0 && (
            <>
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
            </>
          )}
          {props.Search.map((item) => {
            return (
              <ComponentInfo
                logo={item.logo}
                name={item.name}
                navigation={navigation}
                id={item.id}
                mnue={item.mnue}
                location={item.location}
                FavoritPlace={false}
              />
            );
          })}
        </>
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
