import React, { memo, useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Divider } from "react-native-elements";
import AddItemForm from "./AddItemForm";

function AddItem(props) {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [disabledSaveBtn, setDisabledSaveBtn] = useState(true);

  const AddItem = () => {
    const data = {
      itemName: itemName,
      itemDescription: itemDescription,
      itemPrice: itemPrice,
    };
    props.setMnue([...props.mnue, data]);
    props.setShowAddMnue(false);
  };

  return (
    <Dialog visible={props.showAddMnue}>
      <Dialog.Title title="Add Item" titleStyle={{ textAlign: "center" }} />

      <AddItemForm
        itemName={itemName}
        setItemName={setItemName}
        itemDescription={itemDescription}
        setItemDescription={setItemDescription}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        setDisabledSaveBtn={setDisabledSaveBtn}
      />

      <Divider width={2} style={{ marginVertical: 20 }} />

      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Button
          buttonStyle={{
            width: "70%",
            borderRadius: 35,
            borderWidth: 0.2,
            alignSelf: "center",
            margin: 5,
            backgroundColor: "green",
          }}
          title="Save"
          onPress={() => {
            AddItem();
          }}
          disabled={disabledSaveBtn}
        />
        <Button
          buttonStyle={{
            width: "70%",
            borderRadius: 35,
            borderWidth: 0.2,
            alignSelf: "center",
            margin: 5,
            backgroundColor: "red",
          }}
          title="Cancel"
          onPress={() => {
            props.setShowAddMnue(false);
          }}
        />
      </View>
    </Dialog>
  );
}

export default memo(AddItem);
