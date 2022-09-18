import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { Button, Dialog, Divider, Icon, Input } from "react-native-elements";

function MnueList(props) {
  return (
    <View showsHorizontalScrollIndicator={false}>
      {/* {props.mnue.map((item) => {
        return (  */}
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
              // margin: 10,
              // padding: 5,
              justifyContent: "space-evenly",
              width: 200,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "500" }}>
              {props.itemName}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "250", paddingTop: 15 }}>
              {props.itemDescription}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "200", paddingTop: 15 }}>
              {props.itemPrice} SR
            </Text>
          </View>
          <View>
            <Image
              source={{
                uri: "https://cdn.alweb.com/thumbs/hotcoldcups/article/fit727x484/%D8%A3%D9%84%D8%B0-%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D8%B3%D8%A8%D8%A7%D9%86%D8%B4-%D9%84%D8%A7%D8%AA%D9%8A%D9%87.jpg",
              }}
              style={{ width: 100, height: 100, borderRadius: 8 }}
            />
          </View>
        </View>
        <Divider width={0.9} style={{ marginVertical: 20 }} />
      </View>
      {/* );
      })} */}
    </View>
  );
}

export default memo(MnueList);
