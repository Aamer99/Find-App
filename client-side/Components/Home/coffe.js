import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import ComponentInfo from "./ComponentInfo";
import axios from "axios";
import { Icon } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
export default function Coffe({ navigation, ...props }) {
  const [data, setData] = useState([]);
  const [activeLodaing, setActiveLodaing] = useState(true);
  useEffect(() => {
    // get data from database
    const getData = async () => {
      try {
        const response = await axios.get("http://192.168.0.151:4000/coffe");
        if (response.status === 200) {
          setData(response.data);
          setActiveLodaing(false);
        } else {
          throw new Error("valid to get data");
        }
      } catch (error) {
        alert("erorr");
      }
    };
    ///

    getData();
  }, []);

  return (
    <View>
      {!props.showSearch && (
        <>
          {data.map((item) => {
            return (
              <ComponentInfo
                uri={item.coffeLogo}
                name={item.name}
                navigation={navigation}
                heartIconName={"cards-heart-outline"}
                heartIconColor={"black"}
                id={item.id}
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
                uri={item.coffeLogo}
                name={item.name}
                navigation={navigation}
                heartIconName={"cards-heart-outline"}
                heartIconColor={"black"}
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
