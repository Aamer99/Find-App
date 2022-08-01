import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ComponentInfo from "./ComponentInfo";
import axios from "axios";
export default function Coffe(props) {
  const [data, setData] = useState([]);
  const getData = async () => {
    const resualt = await axios.get("http://172.20.10.6:4000/coffe");
    setData(resualt);
  };

  getData();

  return (
    <View>
      {data.map((item) => {
        <ComponentInfo
          uri={item.coffeLogo}
          name={item.name}
          // navigation={navigation}
          heartIconName={"cards-heart-outline"}
          heartIconColor={"black"}
        />;
      })}

      {/* <ComponentInfo
        uri="https://cdn.salla.sa/vrpmE/Q80QaLAm0Hc6JNRlK28bZOIEq2wDhLNJaNgvXymL.png"
        name={"Tim Hortons"}
        // navigation={navigation}
        heartIconName={"cards-heart-outline"}
        heartIconColor={"black"}
      /> */}
    </View>
  );
}
