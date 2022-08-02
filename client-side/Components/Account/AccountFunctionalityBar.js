import React from "react";
import { View, Pressable, Text, AsyncStorage } from "react-native";
import { Icon } from "react-native-elements";
export default function FunctionalityBar({ navigation, ...props }) {
  const logout = () => {
    AsyncStorage.removeItem("token", (err) => {
      if (err) {
        alert("err");
      } else {
        navigation.navigate("Login");
      }
    });
  };
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
        <Icon type="feather" name="edit" size={20} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Edit Profile
        </Text>
      </Pressable>

      <Pressable style={{ margin: 20 }} onPress={logout}>
        <Icon type="feather" name="log-out" size={20} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
