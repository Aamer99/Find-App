import React, { memo, useState } from "react";
import { Input, Button } from "react-native-elements";
import { View } from "react-native";
import axios from "axios";

function EditAccount(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordNotMatch, setErrorPassword] = useState(false);
  const [disabledEditAccountBtn, setDisabledEditAccountBtn] = useState(true);

  const editAccount = async () => {
    try {
      if (password != confirmPassword) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
        const userInfo = {
          name: name,
          email: props.data.email,
          password: password,
          city: props.data.city,
          imageProfile: props.ImageProfile, //props.imageProfile --> from AccountInfo component + the id sholud come from home screen
          profileLanguage: props.data.profileLanguage,
        };
        const update = await axios.post(
          `http://192.168.0.146:4000/user/updateProfile/${props.data.id}`,
          userInfo
        );
        if (update.status === 200) {
          alert("work");
          setConfirmPassword("");
          setPassword("");
          setName("");
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
        value={name}
        onChangeText={(text) => {
          setName(text);

          if (name != "" && password != "" && confirmPassword != "") {
            setDisabledEditAccountBtn(false);
          } else {
            setDisabledEditAccountBtn(true);
          }
        }}
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
        onChangeText={(text) => {
          setPassword(text);
          if (name != "" && password != "" && confirmPassword != "") {
            setDisabledEditAccountBtn(false);
          } else {
            setDisabledEditAccountBtn(true);
          }
        }}
      />
      <Input
        placeholder={"Confirm Password"}
        secureTextEntry={true}
        leftIcon={{ type: "feather", name: "lock", size: 20 }}
        value={confirmPassword}
        errorMessage={passwordNotMatch ? "password not match" : ""}
        onChangeText={(text) => {
          setConfirmPassword(text);
          if (name != "" && password != "" && confirmPassword != "") {
            setDisabledEditAccountBtn(false);
          } else {
            setDisabledEditAccountBtn(true);
          }
        }}
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
        disabled={disabledEditAccountBtn}
      />
    </View>
  );
}

export default memo(EditAccount);
