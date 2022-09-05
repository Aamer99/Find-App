import React, { memo, useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Button, Dialog, Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

import axios from "axios";
function AddMnue(props) {
  const [mnue, setMnue] = useState([]);
  const [image, setImage] = useState("");
  const [mnueList, setMnueList] = useState([]);

  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // mnue.push({ uri: result.uri, index: mnue.length + 1 });
      // alert(JSON.stringify(mnue));
      mnueList.push(result);
      setImage(result.uri);
    }
  };

  const set = async () => {
    try {
      const data = new FormData();
      mnueList.map((item) => {
        data.append("mnue", {
          uri: item.uri,
          type: item.type,
          name: item.fileName || item.uri.substr(item.uri.lastIndexOf("/") + 1),
        });
      });
      // alert(JSON.stringify(data));
      const upload = await axios.post(
        "http://192.168.1.22:4000/place/uploadeMnue",
        data
      );

      if (upload.status === 200) {
        props.setShowAddMnue(false);
        const mnue = [...upload.data];
        props.setMnue(mnue);
      }
    } catch (error) {
      alert(error);
    }
  };
  const removeFromMnue = (uri) => {
    mnueList.filter((item, index) => {
      if (item.uri == uri) {
        return mnueList.splice(index, 1);
      }
    });

    const newMnue = [...mnueList];
    setMnueList(newMnue);
  };
  return (
    <Dialog visible={props.showAddMnue}>
      <Dialog.Title title="Add Mnue" />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            alert("cliked me ");
          }}
          style={{
            borderRadius: 20,
            borderWidth: 0.5,
            borderColor: "black",
            width: 100,
            height: 100,
            margin: 5,
          }}
          onPressIn={handelChoiseImage}
        >
          <Icon
            name="add"
            type="ionicon"
            color="#517fa4"
            size={40}
            style={{
              alignSelf: "center",
              margin: 30,
            }}
          />
        </TouchableOpacity>
        {mnueList.map((item) => {
          return (
            <View>
              <Image
                source={{ uri: item.uri }}
                style={{ width: 100, height: 100, margin: 5 }}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: 0,
                  margin: 5,
                  backgroundColor: "black",
                  opacity: 0.7,
                  zIndex: 1,
                  width: "90%",
                }}
                onPress={() => {
                  removeFromMnue(item.uri);
                }}
              >
                <Icon name="delete" type="AntDesign" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
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

export default AddMnue;
