import React, { memo, useState } from "react";
import { TouchableOpacity, Text, Image, View, TextInput } from "react-native";
import { Button, Dialog, Divider, Icon, Input } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
function AddItemForm(props) {
  const [image, setImage] = useState("");
  const [mnueList, setMnueList] = useState([]);
  const [disabledUploadBtn, setDisabledUploadBtn] = useState(false);

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
      setDisabledUploadBtn(true);
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
    setDisabledUploadBtn(false);
  };
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
        onChangeText={props.setItemName}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
          margin: 5,
        }}
      >
        Discreption:
      </Text>
      <TextInput
        placeholder="discreption"
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
        onChangeText={props.setItemDiscreption}
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
        onChangeText={props.setItemPrice}
      />

      <Text
        style={{
          fontSize: 15,
          fontWeight: "300",
          margin: 5,
        }}
      >
        Upload Photo of Item
      </Text>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <TouchableOpacity
          onPress={() => {
            alert("cliked me ");
          }}
          disabled={disabledUploadBtn}
          style={{
            borderRadius: 20,
            borderWidth: 0.2,
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
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 100,
                  margin: 5,
                  borderRadius: 20,
                  borderWidth: 0.2,
                }}
                key={item}
              />
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: 0,
                  margin: 5,
                  backgroundColor: "black",
                  opacity: 0.7,
                  zIndex: 1,
                  width: 100,
                  borderBottomEndRadius: 25,
                  borderBottomStartRadius: 25,
                  borderWidth: 0.2,
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
    </View>
  );
}

export default memo(AddItemForm);
