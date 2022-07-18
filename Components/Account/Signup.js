import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Button, Icon, Input } from "react-native-elements";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPasswowrd] = useState("");
  const [displedBtn, setDispaeldBtn] = useState(displedBtn + 1);
  return (
    <View
      style={{
        marginTop: "40%",
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
          placeholder="Phonenumber"
          leftIcon={{ type: "feather", name: "smartphone", size: 20 }}
          value={phonenumber}
          onChangeText={setPhonenumber}
        />
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
        <Input
          placeholder="Confirm Password"
          leftIcon={{ type: "feather", name: "lock", size: 20 }}
          secureTextEntry={true}
          value={confirmPassowrd}
          onChangeText={setConfirmPasswowrd}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            buttonStyle={{ borderRadius: 20, width: 150 }}
            title="Register"
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
  );
}
