import React, { useState } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

export default function AccountInfo(props) {
  const [ImageProfile, setImage] = useState(props.ImageProfile);
  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
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
        size={90}
        rounded
        source={{
          uri: ImageProfile,
        }}
        avatarStyle={{
          paddingBottom: 20,
          alignSelf: "center",
        }}
      >
        {props.enableEditAvatar && (
          <Avatar.Accessory size={20} onPress={handelChoiseImage} />
        )}
      </Avatar>
    </View>
  );
}
