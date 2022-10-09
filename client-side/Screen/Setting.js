import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Divider } from "react-native-elements";

import ComponentInfo from "../Components/Home/ComponentInfo";
import axios from "axios";
export default function Setting({ navigation }) {
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
      <View
        style={{
          backgroundColor: "#eee",
          flex: 1,
          top: 30,

          margin: 30,
        }}
      >
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "red",
            width: "100%",
            height: 50,
          }}
        >
          <Pressable
            onPress={() => {
              alert("clicked on language");
            }}
          >
            <Text style={{ marginVertical: 15 }}>Language</Text>
          </Pressable>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "red",
            width: "100%",
            height: 50,
          }}
        >
          <Pressable
            onPress={() => {
              alert("clicked on language");
            }}
          >
            <Text style={{ marginVertical: 15 }}>Feedback</Text>
          </Pressable>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "red",
            width: "100%",
            height: 50,
          }}
        >
          <Pressable
            onPress={() => {
              alert("clicked on language");
            }}
          >
            <Text style={{ marginVertical: 15 }}>Contactus</Text>
          </Pressable>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "red",
            width: "100%",
            height: 50,
          }}
        >
          <Pressable
            onPress={() => {
              alert("clicked on language");
            }}
          >
            <Text style={{ marginVertical: 15 }}>City</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
