import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import ComponentInfo from "./ComponentInfo";
import axios from "axios";
export default function Coffe({ navigation, ...props }) {
  const [data, setData] = useState([]);
  const [activeLodaing, setActiveLodaing] = useState(true);
  useEffect(() => {
    // get data from database
    const getData = async () => {
      try {
        const response = await axios.get("http://172.20.10.6:4000/coffe");
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
      {data.map((item) => {
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
