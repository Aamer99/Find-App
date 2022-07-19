import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Divider } from "react-native-elements";
import BottpmTap from "../Components/Home/BottpmTap";
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

      <Divider width={1} style={{ flex: 1, justifyContent: "flex-end" }} />
      <BottpmTap
        ActiveHome={false}
        ActiveFavorite={true}
        ActiveAccount={false}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
