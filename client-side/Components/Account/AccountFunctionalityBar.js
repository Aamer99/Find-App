import React, { memo, useState } from "react";
import { View, Pressable, Text, AsyncStorage, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Language from "./Language";

function FunctionalityBar({ navigation, ...props }) {
  const logout = () => {
    AsyncStorage.removeItem("token", (err) => {
      if (err) {
        alert("err");
      } else {
        navigation.navigate("Login");
      }
    });
  };
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <View
      style={{
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginTop: 0,
      }}
    >
      <Pressable
        style={{ margin: 20 }}
        onPress={() => {
          props.setShowAuth(true);
          props.sendOTPmessage();
        }}
        disabled={props.disabledEditAccountBtn}
      >
        <Icon type="feather" name="edit" size={25} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Edit Profile
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          setShowLanguage(true);
        }}
        style={{ margin: 20 }}
      >
        <Icon type="feather" name="globe" size={25} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Language
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          setShowLanguage(true);
        }}
        style={{ margin: 20 }}
      >
        <Icon
          name="ios-location-sharp"
          type="ionicon"
          size={25}
          color="white"
        />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>City</Text>
      </Pressable>
      <Pressable style={{ margin: 20 }} onPress={logout}>
        <Icon type="feather" name="log-out" size={25} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Logout
        </Text>
      </Pressable>

      {showLanguage && (
        <Language
          Visible={true}
          AccountLanguage={1}
          setShowLanguage={setShowLanguage}
        />
      )}
    </View>
  );
}

export default memo(FunctionalityBar);
