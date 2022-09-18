import React, { memo } from "react";
import { View, Text } from "react-native";

function Rewards({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        top: 30,
        margin: 30,
      }}
    >
      <Text>Rewards Screen </Text>
    </View>
  );
}

export default memo(Rewards);
