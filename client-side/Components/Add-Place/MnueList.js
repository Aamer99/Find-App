import React, { memo } from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";

function MnueList(props) {
  return (
    <View showsHorizontalScrollIndicator={false}>
      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              width: 200,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 19 }}>{props.itemName}</Text>
            <Text style={{ fontSize: 14, paddingTop: 15 }}>
              {props.itemDescription}
            </Text>
            <Text style={{ fontSize: 12, paddingTop: 15 }}>
              {props.itemPrice} SR
            </Text>
          </View>
        </View>
        <Divider width={0.9} style={{ marginVertical: 20 }} />
      </View>
    </View>
  );
}

export default memo(MnueList);
