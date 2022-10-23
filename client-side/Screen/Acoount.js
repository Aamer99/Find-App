import { View, SafeAreaView, Text, ActivityIndicator } from "react-native";
import React, { memo, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import EditAccount from "../Components/Account/EditAccount";
import FunctionalityBar from "../Components/Account/AccountFunctionalityBar";
import AccountInfo from "../Components/Account/AccountInfo";

function Account({ route, navigation }) {
  const userEmail = route.params.userEmail;
  const [ImageProfile, setImageProfile] = useState(null);
  const [enableEditAvatar, setEnableEditAvatar] = useState(false);
  const [showEditAccount, SetShowEditAccount] = useState(false);

  const getUserData = async () => {
    const result = await axios.get(
      `http://172.20.10.14:4000/user/getOneByEmail/${userEmail}`
    );
    return result;
  };

  const user = useQuery("users", getUserData);

  if (user.status === "success") {
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
            email={user.data.data[0].email}
            name={user.data.data[0].name}
            ImageProfile={user.data.data[0].imageProfile}
            enableEditAvatar={enableEditAvatar}
            setImageProfile={setImageProfile}
          />

          <FunctionalityBar
            disabledEditAccountBtn={showEditAccount}
            navigation={navigation}
            SetShowEditAccount={SetShowEditAccount}
            userEmail={userEmail}
            setEnableEditAvatar={setEnableEditAvatar}
          />
        </View>
        {/*  end top of account screen  */}

        {/* Edit account component  */}
        {showEditAccount && (
          <EditAccount data={user.data.data[0]} ImageProfile={ImageProfile} />
        )}
      </SafeAreaView>
    );
  }

  if (user.status === "error") {
    return (
      <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <Text>Error</Text>
      </SafeAreaView>
    );
  }

  if (user.status === "loading") {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ margin: 10 }}>Loading...</Text>
      </SafeAreaView>
    );
  }
}

export default memo(Account);
