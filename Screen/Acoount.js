import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import BottpmTap from "../Components/Home/BottpmTap";
import Login from "../Components/Account/Login";

export default function Acoount({ navigation }) {
  const [Token, setToken] = useState(false);
  if (!Token) {
    return <Login navigation={navigation} />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <Divider width={1} style={{ flex: 1, justifyContent: "flex-end" }} />
      <BottpmTap
        ActiveHome={false}
        ActiveFavorite={false}
        ActiveAccount={true}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
