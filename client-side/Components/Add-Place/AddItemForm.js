import React, { memo } from "react";
import { Text, View, TextInput } from "react-native";

function AddItemForm(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
          margin: 5,
        }}
      >
        Item Name:
      </Text>
      <TextInput
        placeholder="Item Name"
        style={{
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 1,
          height: 50,
          margin: 5,
          width: "100%",
          padding: 10,
        }}
        onChangeText={(text) => {
          props.setItemName(text);
          if (
            props.ItemName != "" &&
            props.itemDescription != "" &&
            props.itemPrice != ""
          ) {
            props.setDisabledSaveBtn(false);
          } else {
            props.setDisabledSaveBtn(true);
          }
        }}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
          margin: 5,
        }}
      >
        Description:
      </Text>
      <TextInput
        placeholder="description"
        style={{
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 1,
          height: 50,
          margin: 5,
          width: "100%",
          padding: 10,
        }}
        maxLength={100}
        multiline
        numberOfLines={5}
        onChangeText={(text) => {
          props.setItemDescription(text);
          if (
            props.ItemName != "" &&
            props.itemDescription != "" &&
            props.itemPrice != ""
          ) {
            props.setDisabledSaveBtn(false);
          } else {
            props.setDisabledSaveBtn(true);
          }
        }}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
          margin: 5,
        }}
      >
        Item Price:
      </Text>
      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        style={{
          borderRadius: 10,
          borderColor: "black",
          borderWidth: 1,
          height: 50,
          margin: 5,
          width: "100%",
          padding: 10,
        }}
        onChangeText={(text) => {
          props.setItemPrice(text);
          if (
            props.ItemName != "" &&
            props.itemDescription != "" &&
            props.itemPrice != ""
          ) {
            props.setDisabledSaveBtn(false);
          } else {
            props.setDisabledSaveBtn(true);
          }
        }}
      />
    </View>
  );
}

export default memo(AddItemForm);
