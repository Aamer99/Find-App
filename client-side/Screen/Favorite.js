import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Divider } from "react-native-elements";

import ComponentInfo from "../Components/Home/ComponentInfo";
export default function Favorite({ navigation }) {
  const [Token, setToken] = useState(true);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {!Token && (
        <View style={{ marginTop: "50%", width: "80%", alignSelf: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 20 }}>
            Please you should login first{" "}
          </Text>
          <Button
            title="login"
            buttonStyle={{ backgroundColor: "#198754" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
      )}
      {Token && (
        <View>
          <ComponentInfo
            uri="https://i.pinimg.com/736x/c7/84/67/c78467db9ff497393cb548a48f02d451.jpg"
            name={"Search"}
            navigation={navigation}
            heartIconName={"cards-heart"}
            heartIconColor="red"
          />

          <ComponentInfo
            uri="https://i.pinimg.com/736x/c7/84/67/c78467db9ff497393cb548a48f02d451.jpg"
            name={"Search"}
            navigation={navigation}
            heartIconName={"cards-heart"}
            heartIconColor="red"
          />
        </View>
      )}
    </SafeAreaView>
  );
}
