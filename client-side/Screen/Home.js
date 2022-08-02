import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../Components/Home/Home-Header";
import SearchBar from "../Components/Home/SearchBar";
import ComponentInfo from "../Components/Home/ComponentInfo";
import { Divider } from "react-native-elements";
import BottpmTap from "../Components/TapBar";
import axios from "axios";
import Coffe from "../Components/Home/coffe";
import Restaurant from "../Components/Home/Restaurant";
export default function Home({ navigation }) {
  const [Search, setSearch] = useState("");
  const [section, setSection] = useState("Coffe");

  // async function checkToken() {
  //   try {
  //     const token = await AsyncStorage.getItem("token");
  //     const tokeninfo = {
  //       token: token,
  //     };

  //     alert(token);
  //     const checkToken = await axios.post(
  //       "http://192.168.0.156:4000/user/verifyToken",
  //       tokeninfo
  //     );
  //     alert(checkToken.status);
  //   } catch (err) {
  //     alert("this message " + err.messages);
  //   }
  // }

  useEffect(() => {
    // const auth = async () => {
    //   try {
    //     const token = AsyncStorage.getItem("toekn");
    //     const tokenInfo = {
    //       token: token,
    //     };
    //     const response = await axios.post(
    //       "http://192.168.1.21:4000/user/verifyToken",
    //       tokenInfo
    //     );

    //     if (response.status === 400) {
    //       navigation.navigate("Login");
    //     }
    //   } catch (err) {
    //     alert(err);
    //   }
    // };
    const auth = () => {
      // if (!(user && user.accessToken)) {
      //   navigation.navigate("Login");
      // }
      const token = AsyncStorage.getItem("token");

      alert(token);
    };

    auth();
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, top: 30 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HomeHeader SectionHandler={setSection} />
        <SearchBar SearchHandler={setSearch} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {section == "Coffe" && <Coffe Search={Search} />}
        {section == "Restaurant" && <Restaurant Search={Search} />}
      </ScrollView>
    </SafeAreaView>
  );
}
