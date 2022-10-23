import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  AsyncStorage,
} from "react-native";
import React, { memo, useState } from "react";
import { Input, Button } from "react-native-elements";
import axios from "axios";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [disabledLoginBtn, setDisabledLoginBtn] = useState(true);
  async function onSubmit() {
    try {
      const loginInfo = {
        email: email.toLowerCase(),
        password: password,
      };

      const login = await axios.post(
        "http://172.20.10.14:4000/user/login",
        loginInfo
      );
      if (login) {
        await AsyncStorage.setItem("token", JSON.stringify(login.data));
        const userCity = await axios.get(
          `http://172.20.10.14:4000/user/getCity/${email}`
        );

        navigation.navigate("Tap", {
          userEmail: email,
          userCity: userCity.data,
        });
      } else {
        setValidLogin(true);
      }
    } catch (error) {
      setValidLogin(true);
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

        {/* Login Form  */}

        <View style={{ marginHorizontal: 50, marginTop: 20 }}>
          <Input
            placeholder="Email"
            leftIcon={{ type: "feather", name: "mail", size: 20 }}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (email != "" && password != "") {
                setDisabledLoginBtn(false);
              } else {
                setDisabledLoginBtn(true);
              }
            }}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (email != "" && password != "") {
                setDisabledLoginBtn(false);
              } else {
                setDisabledLoginBtn(true);
              }
            }}
            errorMessage={validLogin ? "Valid email or password" : ""}
            errorStyle={{
              color: "red",
              margin: 10,
              fontSize: 10,
              fontWeight: "600",
            }}
          />
          {/* Login Button  */}
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
              disabled={disabledLoginBtn}
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
              navigation.navigate("Signup");
            }}
          >
            <Text style={{ color: "black", fontWeight: "600" }}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default memo(Login);
