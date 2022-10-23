import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Divider } from "react-native-elements";

import ComponentInfo from "../Components/Home/ComponentInfo";
import axios from "axios";
import Language from "../Components/Setting/Language";
export default function Setting({ navigation }) {
  const [showLanguage, setShowLanguage] = useState(false);

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
              setShowLanguage(true);
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
              alert("clicked on Feedback");
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
              alert("clicked on Contact us");
            }}
          >
            <Text style={{ marginVertical: 15 }}>Contact us</Text>
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
              setShowLanguage(true);
            }}
          >
            <Text style={{ marginVertical: 15 }}>City</Text>
          </Pressable>
        </View>
      </View>

      {showLanguage && (
        <Language
          Visible={true}
          AccountLanguage={1}
          setShowLanguage={setShowLanguage}
        />
      )}
    </SafeAreaView>
  );
}
