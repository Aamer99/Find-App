import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Button, Input } from "react-native-elements";
import Logo from "../assets/Find-logos/logos_black.png";
import RNPickerSelect from "react-native-picker-select";
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
export default function Signup({ navigation }) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPasswowrd] = useState("");
  const [cities, setCities] = useState([{ label: "Madina", value: "Madina" }]);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  const [city, setCity] = useState("");
  async function onSubmit() {
    try {
      const userInfo = {
        name: name,
        email: email.toLowerCase(),
        city: city,
        password: password,
      };

      if (password != confirmPassowrd) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);
        const Register = await axios.post(
          "http://192.168.0.150:4000/user/signup",
          userInfo
        );
        if (Register.status == 200) {
          alert("AAA");
          navigation.navigate("Login");
        } else {
          alert("err");
        }
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,1.5)",
          borderRadius: 20,
          width: "90%",
          alignSelf: "center",
          top: "25%",
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
