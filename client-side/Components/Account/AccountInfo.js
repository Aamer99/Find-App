import React, { memo, useState } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
function AccountInfo(props) {
  const [changeImageProfile, setChangeImageProfile] = useState(false);
  const [selectedImage, SetSelectedImage] = useState(null);

  const handelChoiceImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const data = new FormData();
      data.append("Image", {
        uri: result.uri,
        type: result.type,
        name:
          result.fileName || result.uri.substr(result.uri.lastIndexOf("/") + 1),
      });

      const upload = await axios.post(
        "http://192.168.0.146:4000/user/uploadProfileImage",
        data
      );
      if (upload.status === 200) {
        props.setImageProfile(upload.data);
        SetSelectedImage(result.uri);
        setChangeImageProfile(true);
      } else
        (err) => {
          alert(err);
        };
    }
  };

  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        backgroundColor: "#cccccc",
        paddingBottom: 20,
        paddingTop: 20,
      }}
    >
      <View style={{ margin: 20 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            fontFamily: "Baskerville-SemiBold",
            marginBottom: 5,
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "200",
            fontFamily: "AvenirNext-MediumItalic",
          }}
        >
          {props.email}
        </Text>
      </View>
      <Avatar
        size={80}
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        source={{
          uri: changeImageProfile ? selectedImage : props.ImageProfile,
        }}
        containerStyle={{ backgroundColor: "#6733b9" }}
      >
        {props.enableEditAvatar && (
          <Avatar.Accessory size={20} onPress={handelChoiceImage} />
        )}
      </Avatar>
    </View>
  );
}
export default memo(AccountInfo);
