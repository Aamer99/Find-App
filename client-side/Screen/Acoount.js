import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Icon, Input, Dialog } from "react-native-elements";

import Login from "../Screen/Login";
import * as ImagePicker from "expo-image-picker";
export default function Acoount({ navigation }) {
  const [Token, setToken] = useState(true);
  // this fill from the database
  const [Name, setName] = useState("Aamer Essa");
  const [Email, setEmail] = useState("aamer.es12@gmail.com");
  const [Password, setPassword] = useState("Aamer1420");
  const [ConfirmPassowrd, setConfirmPassword] = useState("Aamer1420");
  const [ImageProfile, setImage] = useState(
    "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
  );
  //----------------------
  const [showEditAccount, SetshowEditAccount] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

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

  if (!Token) {
    return <Login navigation={navigation} />;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View
        style={{
          backgroundColor: "gray",
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}
      >
        <AccountInfo
          email={"Aamer,es12@gmail.com "}
          name={"aamer essa"}
          ImageProfile={ImageProfile}
        />
        <AccountBar setShowAuth={setShowAuth} />
      </View>
      <AccountAuthenticate showAuth={showAuth} setShowAuth={setShowAuth} />

      {showEditAccount && (
        <EditAccount
          name={Name}
          setName={setName}
          email={Email}
          setEmail={setEmail}
          password={Password}
          setPassword={setPassword}
          confirmPassowrd={ConfirmPassowrd}
          setConfirmPassword={setConfirmPassword}
        />
      )}
    </SafeAreaView>
  );
}

const AccountInfo = (props) => {
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
          uri: props.ImageProfile,
        }}
        avatarStyle={{
          paddingBottom: 20,
          alignSelf: "center",
        }}
      >
        {/* {showEditAccount && (
          <Avatar.Accessory size={20} onPress={handelChoiseImage} />
        )} */}
      </Avatar>
    </View>
  );
};

const AccountBar = (props) => {
  return (
    <View
      style={{
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginTop: 0,
      }}
    >
      <Pressable
        style={{ margin: 20 }}
        onPress={() => {
          props.setShowAuth(true);
        }}
      >
        <Icon type="feather" name="edit" size={20} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Edit Profile
        </Text>
      </Pressable>

      <Pressable style={{ margin: 20 }}>
        <Icon type="feather" name="log-out" size={20} color="white" />
        <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

const AccountAuthenticate = (props) => {
  return (
    <Dialog visible={props.showAuth}>
      <Dialog.Title title="Athenticate" />
      <Text>We send message to your email please enter the numbers </Text>
      <Input
        // placeholder="Full Name "
        leftIcon={{ type: "feather", name: "key", size: 20 }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Button title="Submit" />
        <Button
          title="Cansel"
          onPress={() => {
            props.setShowAuth(false);
          }}
        />
      </View>
    </Dialog>
  );
};

const EditAccount = (props) => {
  return (
    <View style={{ alignSelf: "center", width: "80%", marginTop: 30 }}>
      <Input
        placeholder="Full Name "
        leftIcon={{ type: "feather", name: "user", size: 20 }}
        value={props.name}
        onChangeText={props.setName}
      />
      <Input
        placeholder="Email"
        value={props.email}
        leftIcon={{ type: "feather", name: "mail", size: 20 }}
        onChangeText={props.setEmail}
      />
      <Input
        placeholder="Password"
        value={props.password}
        secureTextEntry={true}
        leftIcon={{ type: "feather", name: "lock", size: 20 }}
        onChangeText={props.setPassword}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        leftIcon={{ type: "feather", name: "lock", size: 20 }}
        value={props.confirmPassowrd}
        onChangeText={props.setConfirmPassword}
      />
      <Button
        icon={{ type: "feather", name: "edit", size: 20, color: "white" }}
        title="Edit Account"
        buttonStyle={{
          backgroundColor: "#198754",
          width: 200,
          alignSelf: "center",
        }}
      />
    </View>
  );
};
