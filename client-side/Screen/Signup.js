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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cities, setCities] = useState([{ label: "Medina", value: "Medina" }]);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  const [city, setCity] = useState("");
  const [imageProfile, setImageProfile] = useState("");
  const [selectedImage, SetSelectedImage] = useState(null);
  const [disabledSignupBtn, setDisabledSignupBtn] = useState(true);
  async function onSubmit() {
    try {
      if (password != confirmPassword) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);

        const userInfo = {
          name: name,
          email: email.toLowerCase(),
          city: city,
          password: password,
          imageProfile: imageProfile === "" ? null : imageProfile,
        };

        const Register = await axios.post(
          "http://172.20.10.14:4000/user/signup",
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
        "http://192.168.1.22:4000/user/uploadProfileImage",
        data
      );
      if (upload.status === 200) {
        SetSelectedImage(result.uri);

        setImageProfile(upload.data);
      } else
        (err) => {
          alert(err);
        };
    }
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
            onPress={handelChoiceImage}
            containerStyle={{ backgroundColor: "#6733b9" }}
            source={{ uri: selectedImage }}
          />
        </View>

        <View style={{ width: "80%", marginHorizontal: 40 }}>
          <Input
            placeholder="Full Name "
            leftIcon={{ type: "feather", name: "user", size: 20 }}
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (
                name != "" &&
                email != "" &&
                password != "" &&
                confirmPassword != "" &&
                city != ""
              ) {
                setDisabledSignupBtn(false);
              } else {
                setDisabledSignupBtn(true);
              }
            }}
          />

          <Input
            placeholder="Email"
            leftIcon={{ type: "feather", name: "mail", size: 20 }}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (
                name != "" &&
                email != "" &&
                password != "" &&
                confirmPassword != "" &&
                city != ""
              ) {
                setDisabledSignupBtn(false);
              } else {
                setDisabledSignupBtn(true);
              }
            }}
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
            onChangeText={(text) => {
              setPassword(text);
              if (
                name != "" &&
                email != "" &&
                password != "" &&
                confirmPassword != "" &&
                city != ""
              ) {
                setDisabledSignupBtn(false);
              } else {
                setDisabledSignupBtn(true);
              }
            }}
          />
          <Input
            placeholder="Confirm Password"
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (
                name != "" &&
                email != "" &&
                password != "" &&
                confirmPassword != "" &&
                city != ""
              ) {
                setDisabledSignupBtn(false);
              } else {
                setDisabledSignupBtn(true);
              }
            }}
            errorMessage={invalidPassword ? "password not match" : ""}
          />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button
              buttonStyle={{ borderRadius: 20, width: 150 }}
              title="Signup"
              onPress={onSubmit}
              disabled={disabledSignupBtn}
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
