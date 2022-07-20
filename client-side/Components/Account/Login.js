import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Input, Button, Dialog } from "react-native-elements";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit() {
    alert("your email is:" + email + "|| your Password is: " + password);
  }
  return (
    <View
      style={{
        marginTop: "50%",
        backgroundColor: "rgba(255,255,255,1.5)",
        borderRadius: 20,

        width: "90%",
        alignSelf: "center",
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
        />
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
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
          <Button
            buttonStyle={{ borderRadius: 20, backgroundColor: "#FF190C" }}
            title="Cancel"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
      <View
        style={{ alignSelf: "center", flexDirection: "row", marginBottom: 30 }}
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
  );
}
