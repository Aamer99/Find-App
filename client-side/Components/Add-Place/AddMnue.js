import React, { memo, useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Dialog, Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
function AddMnue(props) {
  const mnue = [];
  const [image, setImage] = useState("");
  alert("hi");
  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      alert(JSON.stringify(result.uri));
      mnue.push({ mnue: result, uri: result.uri });
      alert(JSON.stringify(mnue));
      setImage(result.uri);
    }
    this.forceUpdate();
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
            <Image
              source={{ uri: item.uri }}
              style={{ width: 100, height: 100, margin: 5 }}
            />
          );
        })}
      </View>
    </Dialog>
  );
}

export default AddMnue;
