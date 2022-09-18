import React, { memo, useState } from "react";
import { View } from "react-native";
import { Button, Dialog, Divider } from "react-native-elements";

import axios from "axios";
import AddItemForm from "./AddItemForm";

function AddItem(props) {
  // const [mnue, setMnue] = useState([]);
  // const [image, setImage] = useState("");
  const [mnueList, setMnueList] = useState([]);
  //const [disabledUploadBtn, setDisabledUploadBtn] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDiscreption] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState("");

  const set = async () => {
    try {
      // const data = new FormData();
      // mnueList.map((item) => {
      //   data.append("mnue", {
      //     uri: item.uri,
      //     type: item.type,
      //     name: item.fileName || item.uri.substr(item.uri.lastIndexOf("/") + 1),
      //   });
      // });
      // // alert(JSON.stringify(data));
      // const upload = await axios.post(
      //   "http://192.168.1.22:4000/place/uploadeMnue",
      //   data
      // );

      // if (upload.status === 200) {
      //   props.setShowAddMnue(false);
      //   const mnue = [...upload.data];
      //   props.setMnue(mnue);
      // }
      const data = {
        itemName: itemName,
        itemDescription: itemDescription,
        itemPrice: itemPrice,
        itemImage: itemImage,
      };
      props.setMnue([...props.mnue, data]);
      props.setShowAddMnue(false);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Dialog visible={props.showAddMnue}>
      <Dialog.Title title="Add Item" titleStyle={{ textAlign: "center" }} />
      <AddItemForm
        setItemImage={setItemImage}
        setItemName={setItemName}
        setItemDiscreption={setItemDiscreption}
        setItemPrice={setItemPrice}
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
            set();
            // props.setShowAddMnue(false);
            // const mnue = [...mnueList];
            // props.setMnue(mnue);
          }}
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
          title="Cansel"
          onPress={() => {
            props.setShowAddMnue(false);
          }}
        />
      </View>
    </Dialog>
  );
}

export default memo(AddItem);
