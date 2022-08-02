import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";
import EditAccount from "../Components/Account/EditAccount";
import AccountVerification from "../Components/Account/AccountVerification";
import FunctionalityBar from "../Components/Account/AccountFunctionalityBar";
import AccountInfo from "../Components/Account/AccountInfo";
export default function Acoount({ navigation }) {
  const [data, setData] = useState([]);
  const [OTP, setOTP] = useState(null);

  const [showEditAccount, SetshowEditAccount] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const sendOTPmessage = async () => {
    try {
      const respons = await axios.post(
        "http://172.20.10.6:4000/user/authUser/aamer.es12@gmail.com"
      );
      if (respons.status === 200) {
        setOTP(respons.data);
      }
    } catch (error) {
      alert("errorrr");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const respons = await axios.get("http://172.20.10.6:4000/user/112122");
        if (respons.status === 200) {
          setData(respons.data[0]);
        } else {
          throw new Error("valid to get data");
        }
      } catch (err) {
        alert("error in all function Account screen ");
      }
    };
    getData();
  });
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {/*  top of account screen  */}
      <View
        style={{
          backgroundColor: "gray",
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}
      >
        <AccountInfo
          email={data.email}
          name={data.name}
          ImageProfile={data.imageProfile} //data.imageprofile
          enableEditAvatar={showEditAccount}
        />
        <FunctionalityBar
          setShowAuth={setShowAuth}
          sendOTPmessage={sendOTPmessage}
          disabledEditAccountBtn={showEditAccount}
          navigation={navigation}
        />
      </View>
      {/*  end top of account screen  */}

      <AccountVerification
        showAuth={showAuth}
        setShowAuth={setShowAuth}
        OTPmessage={OTP}
        SetshowEditAccount={SetshowEditAccount}
      />

      {showEditAccount && <EditAccount data={data} />}
    </SafeAreaView>
  );
}
