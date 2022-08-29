import React, { memo, useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Button, Dialog, Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { Pressable } from "react-native";
function AddMnue(props) {
  const [mnue, setMnue] = useState([]);
  const [image, setImage] = useState("");

  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      mnue.push({ mnue: result, uri: result.uri, index: mnue.length + 1 });

      setImage(result.uri);
    }
    this.forceUpdate();
  };
  const removeFromMnue = (item) => {
    alert(item);
    mnue.splice(item, item + 1);
    alert(mnue.length);
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
            borderColor: "red",
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
              //justifyContent: "center",
              //alignItems: "center",
              //textAlign: "center",
              alignSelf: "center",
              margin: 30,
            }}
          />
        </TouchableOpacity>
        {mnue.map((item) => {
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
                  removeFromMnue(item.index);
                }}
              >
                <Icon name="delete" type="AntDesign" size={20} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <Button
        buttonStyle={{
          width: "90%",
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
    </Dialog>
  );
}

export default AddMnue;
