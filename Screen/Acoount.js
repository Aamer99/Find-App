import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Divider, Icon, Input } from "react-native-elements";
import BottpmTap from "../Components/Home/BottpmTap";
import Login from "../Components/Account/Login";
import * as ImagePicker from "expo-image-picker";
export default function Acoount({ navigation }) {
  const [Token, setToken] = useState(true);
  const [Name, setName] = useState("Aamer Essa");
  const [Email, setEmail] = useState("aamer.es12@gmail.com");
  const [showEditAccount, SetshowEditAccount] = useState(false);
  const [ShowPassowrd, SetshowPassowrd] = useState(true);
  const [iconName, setIconNAme] = useState("eye-off");
  const [ImageProfile, setImage] = useState(null);
  const handelChoiseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      alert(result.uri);
    }
  };
  function showPassowrd() {
    if (ShowPassowrd) {
      SetshowPassowrd(false);
      setIconNAme("eye");
    } else {
      SetshowPassowrd(true);
      setIconNAme("eye-off");
    }
  }
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
              Aamer Essa
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "200",
                fontFamily: "AvenirNext-MediumItalic",
              }}
            >
              aamer.es12@gmail.com
            </Text>
          </View>
          <Avatar
            size={90}
            rounded
            source={{
              uri: ImageProfile,
            }}
            avatarStyle={{
              paddingBottom: 20,
              alignSelf: "center",
            }}
          >
            {showEditAccount && (
              <Avatar.Accessory size={20} onPress={handelChoiseImage} />
            )}
          </Avatar>
        </View>

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
              SetshowEditAccount(true);
            }}
          >
            <Icon type="feather" name="edit" size={20} color="white" />
            <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
              Edit Profile
            </Text>
          </Pressable>
          <Pressable style={{ margin: 20 }}>
            <Icon type="feather" name="map-pin" size={20} color="white" />
            <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
              Add Location
            </Text>
          </Pressable>
          <Pressable style={{ margin: 20 }}>
            <Icon type="feather" name="log-out" size={20} color="white" />
            <Text style={{ marginTop: 5, fontSize: 15, color: "white" }}>
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
      {showEditAccount && (
        <View style={{ alignSelf: "center", width: "80%", marginTop: 30 }}>
          <Input
            placeholder="Full Name "
            leftIcon={{ type: "feather", name: "user", size: 20 }}
            value={Name}
            onChangeText={setName}
          />
          <Input
            placeholder="Email"
            value={Email}
            leftIcon={{ type: "feather", name: "mail", size: 20 }}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            value="Aamer1420"
            secureTextEntry={ShowPassowrd}
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            rightIcon={{
              type: "feather",
              name: iconName,
              size: 20,
              onPress: showPassowrd,
            }}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={ShowPassowrd}
            leftIcon={{ type: "feather", name: "lock", size: 20 }}
            value="Aamer1420"
            rightIcon={{
              type: "feather",
              name: iconName,
              size: 20,
              onPress: showPassowrd,
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
          />
        </View>
      )}
      <Divider width={1} style={{ flex: 1, justifyContent: "flex-end" }} />
      <BottpmTap
        ActiveHome={false}
        ActiveFavorite={false}
        ActiveAccount={true}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
