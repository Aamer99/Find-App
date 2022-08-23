import React, { memo, useState } from "react";
import { Input, Button } from "react-native-elements";
import { View } from "react-native";
import axios from "axios";
function EditAccount(props) {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [passwordNotMatch, setErorrPassword] = useState(false);
  const editAccount = async () => {
    try {
      if (password == "" && confirmPassowrd == "") {
        setPassword(props.data.password);
        if (name == null) {
          alert("aaaa");
          setName(props.data.name);
        }

        const userInfo = {
          name: name,
          email: props.data.email,
          password: password,
          city: props.data.city,
          imageProfile: props.data.imageProfile, //props.imageProfile --> from AccountInfo component + the id sholud come from home screen
          profileLanguage: props.data.profileLanguage,
        };

        const update = await axios.post(
          `http://192.168.1.22:4000/user/updateProfile/${props.data.id}`,
          userInfo
        );
        if (update.status === 200) {
          alert("work");
        } else {
          alert("not work ");
        }
      } else if (password != confirmPassowrd) {
        setErorrPassword(true);
        if (name == null) {
          alert("Aaaa");
          setName(props.data.name);
        }
      } else {
        const userInfo = {
          name: name,
          email: props.data.email,
          password: password,
          city: props.data.city,
          imageProfile: props.data.imageProfile, //props.imageProfile --> from AccountInfo component + the id sholud come from home screen
          profileLanguage: props.data.profileLanguage,
        };

        const update = await axios.post(
          `http://192.168.1.21:4000/user/updateProfile/${props.data.id}`,
          userInfo
        );
        if (update.status === 200) {
          alert("work");
        } else {
          alert("not work ");
        }
      }
    } catch (err) {
      alert("err in all function ");
    }
  };
  return (
    <View style={{ alignSelf: "center", width: "80%", marginTop: 30 }}>
      <Input
        placeholder={props.data.name}
        leftIcon={{ type: "feather", name: "user", size: 20 }}
        onChangeText={setName}
      />
      <Input
        value={props.data.email}
        leftIcon={{ type: "feather", name: "mail", size: 20 }}
      />
      <Input
        placeholder={"Password"}
        value={password}
        secureTextEntry={true}
        leftIcon={{ type: "feather", name: "lock", size: 20 }}
        onChangeText={setPassword}
      />
      <Input
        placeholder={"Confirm Password"}
        secureTextEntry={true}
        leftIcon={{ type: "feather", name: "lock", size: 20 }}
        value={confirmPassowrd}
        onChangeText={setConfirmPassword}
        errorMessage={passwordNotMatch ? "password not match" : ""}
      />
      <Button
        icon={{ type: "feather", name: "edit", size: 20, color: "white" }}
        title="Edit Account"
        buttonStyle={{
          backgroundColor: "#198754",
          width: 200,
          alignSelf: "center",
        }}
        onPress={editAccount}
      />
    </View>
  );
}

export default memo(EditAccount);
