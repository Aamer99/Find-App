import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import axios from "axios";
import Entypo from "react-native-vector-icons/Entypo";
import PlaceContainer from "./PlaceContiner";
export default function Coffe({ navigation, ...props }) {
  const [data, setData] = useState([]);
  const [activeLodaing, setActiveLodaing] = useState(true);

  useEffect(() => {
    // get data from database
    const getData = async () => {
      try {
        const response = await axios.post("http://192.168.1.21:4000/place", {
          city: props.userCity,
          type: "Coffe",
        });
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
  });

  return (
    <View>
      {!props.showSearch && (
        <PlaceContainer places={data} navigation={navigation} />
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
          {props.Search.length != 0 && (
            <PlaceContainer places={props.Search} navigation={navigation} />
          )}
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
