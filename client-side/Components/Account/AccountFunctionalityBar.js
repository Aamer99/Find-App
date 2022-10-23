import React, { memo, useState } from "react";
import { View, Pressable, Text, AsyncStorage } from "react-native";
import { Icon } from "react-native-elements";
import AccountVerification from "./AccountVerification";
import axios from "axios";

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

  const [showAuth, setShowAuth] = useState(false);
  const [otpMessage, setOTP] = useState(null);
  const sendOtpMessage = async () => {
    const res = await axios.post(
      `http://172.20.10.14:4000/user/authUser/${props.userEmail}`
    );

    if (res.status == 200) {
      setOTP(res.data);
    }
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
          setShowAuth(true);
          sendOtpMessage();
        }}
        disabled={props.disabledEditAccountBtn}
      >
        <Icon type="feather" name="edit" size={25} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Edit Profile
        </Text>
      </Pressable>

      <Pressable style={{ margin: 20 }} onPress={logout}>
        <Icon type="feather" name="log-out" size={25} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Logout
        </Text>
      </Pressable>

      {showAuth && (
        <AccountVerification
          SetShowEditAccount={props.SetShowEditAccount}
          setShowAuth={setShowAuth}
          otpMessage={otpMessage}
          setEnableEditAvatar={props.setEnableEditAvatar}
        />
      )}
    </View>
  );
}

export default memo(FunctionalityBar);
