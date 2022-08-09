import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  AsyncStorage,
} from "react-native";
import React, { useState } from "react";
import { Input, Button, Dialog, Icon, Image } from "react-native-elements";
import axios from "axios";
import Logo from "../assets/Find-logos/logos_black.png";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmailorPassword, setValidEmailorPassword] = useState(false);
  async function onSubmit() {
    try {
      const loginInfo = {
        email: email.toLowerCase(),
        password: password,
      };

      const login = await axios.post(
        "http://192.168.0.151:4000/user/login",
        loginInfo
      );
      if (login) {
        await AsyncStorage.setItem("token", JSON.stringify(login.data));
        navigation.navigate("Tap", { userEmail: email });
        console.log(login.data);
      } else {
        setValidEmailorPassword(true);
      }
    } catch (error) {
      setValidEmailorPassword(true);
    }

    // setTimeout(() => {
    //   navigation.navigate("Tap");
    // });
  }
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,1.5)",
          borderRadius: 20,
          width: "90%",
          alignSelf: "center",
          top: "50%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
            fontSize: 30,
            fontFamily: "Apple SD Gothic Neo",
          }}
        >
          Login
        </Text>
        <View style={{ marginHorizontal: 50, marginTop: 20 }}>
          <Input
            placeholder="Email"
            leftIcon={{ type: "feather", name: "mail", size: 20 }}
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            value={password}
            onChangeText={setPassword}
            errorMessage={validEmailorPassword ? "Valid email or password" : ""}
            errorStyle={{
              color: "red",
              margin: 10,
              fontSize: 10,
              fontWeight: "600",
            }}
          />
          <View style={{ justifyContent: "center", flexDirection: "row" }}>
            <Button
              title="Log in"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "#66BB6A",
                borderRadius: 20,
                marginBottom: 20,
                width: 150,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: 20 }}
              onPress={onSubmit}
            />
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <Text>Don't have an Account ? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Singup");
            }}
          >
            <Text style={{ color: "black", fontWeight: "600" }}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
