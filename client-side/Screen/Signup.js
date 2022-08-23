import { View, Text, Pressable, SafeAreaView, StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import { Button, Input } from "react-native-elements";

import RNPickerSelect from "react-native-picker-select";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import { Avatar } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import base64 from "react-native-base64";
function Signup({ navigation }) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPasswowrd] = useState("");
  const [cities, setCities] = useState([{ label: "Madina", value: "Madina" }]);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  const [city, setCity] = useState("");
  const [imageProfile, setImageProfile] = useState("");
  const [selectedImage, SetSlectedImage] = useState("");
  async function onSubmit() {
    try {
      if (password != confirmPassowrd) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);

        const userInfo = {
          name: name,
          email: email.toLowerCase(),
          city: city,
          password: password,
          imageProfile: imageProfile,
        };

        const Register = await axios.post(
          "http://192.168.1.22:4000/user/signup",
          userInfo
        );
        if (Register.status == 200) {
          navigation.navigate("Login");
        } else
          (eer) => {
            alert(eer);
          };
      }
    } catch (err) {
      alert(err);
    }
  }
  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const Base64Image = convertBase64(result.uri);
      setImageProfile(Base64Image);
      SetSlectedImage(result.uri);
    }
  };

  const convertBase64 = (file) => {
    return base64.encode(file);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,1.5)",
          borderRadius: 20,
          width: "90%",
          alignSelf: "center",
          top: "15%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "600",
            fontSize: 30,
            fontFamily: "Apple SD Gothic Neo",
          }}
        >
          Signup
        </Text>
        <View style={{ alignItems: "center", margin: 10 }}>
          <Avatar
            size={80}
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            onPress={handelChoiseImage}
            containerStyle={{ backgroundColor: "#6733b9" }}
            source={{ uri: selectedImage }}
          />
        </View>

        <View style={{ width: "80%", marginHorizontal: 40 }}>
          <Input
            placeholder="Full Name "
            leftIcon={{ type: "feather", name: "user", size: 20 }}
            value={name}
            onChangeText={setName}
          />

          <Input
            placeholder="Email"
            leftIcon={{ type: "feather", name: "mail", size: 20 }}
            value={email}
            onChangeText={setEmail}
          />

          <RNPickerSelect
            onValueChange={setCity}
            items={cities}
            value={city}
            style={pickerSelectStyles}
            placeholder={selectPlaceholder}
            Icon={() => {
              return <Feather name="map-pin" size={22} />;
            }}
          />

          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirm Password"
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            secureTextEntry={true}
            value={confirmPassowrd}
            onChangeText={setConfirmPasswowrd}
            errorMessage={invalidPassword ? "password not match" : ""}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              buttonStyle={{ borderRadius: 20, width: 150 }}
              title="Register"
              onPress={onSubmit}
            />
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          <Text>Have an Account? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ fontWeight: "600" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,

    color: "black",
    paddingLeft: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    margin: 5,
  },
  iconContainer: {
    top: 10,
    left: 10,
  },
});

export default memo(Signup);
