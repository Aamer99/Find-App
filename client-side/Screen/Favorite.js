import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Divider } from "react-native-elements";

import ComponentInfo from "../Components/Home/ComponentInfo";
import axios from "axios";
export default function Favorite({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.21:4000/place/favoritplaces/7986680"
        );
        if (response.status === 200) {
          setData(response.data);
        } else {
          alert("err in respons get favorit place");
        }
      } catch (error) {
        throw error;
      }
    };
    getData();
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View>
        {data.map((item) => {
          alert(item.name);
          alert(item.logo);
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
              FavoritPlace={true}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}
