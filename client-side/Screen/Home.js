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

export default function Home({ navigation }) {
  const [Search, setSearch] = useState("");
  const [section, setSection] = useState("Coffe");
  const [Token, setToken] = useState(null);

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
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        alert(token);
        setToken(token);
      } catch (err) {
        alert("err");
      }
    };
    const checkToken = async () => {
      try {
        const tokeInfo = {
          token: Token,
        };
        alert("Token from checkToken is " + tokeInfo.token);
        const auth = await axios.post(
          "http://192.168.0.156:4000/user/verifyToken",
          tokeInfo
        );
        if (auth) {
          alert(work);
        }
      } catch (error) {
        alert(new Error(error));
      }
    };
    getToken();
    checkToken();
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, top: 30 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HomeHeader SectionHandler={setSection} />
        <SearchBar SearchHandler={setSearch} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {section == "Coffe" && (
          // get data from database based on section type
          // and get data from database based on serching
          <>
            <ComponentInfo
              uri="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/131451090/original/fb546458e8dd77ff0c6ee43abed68c8c8a94fdf7/do-a-creative-restaurant-logo.jpg"
              name={Search}
              // navigation={navigation}
              heartIconName={"cards-heart-outline"}
              heartIconColor={"black"}
            />
            <ComponentInfo
              uri="https://s3-eu-west-1.amazonaws.com/forasna/uploads/logos/thumb_clogo_2017-08-16-20-32-01_WHBFR4f1bOxtlAflQ0eoKgXX.jpg"
              name={section}
              //navigation={navigation}
              heartIconName={"cards-heart-outline"}
              heartIconColor={"black"}
            />
            <ComponentInfo
              uri="https://s3-eu-west-1.amazonaws.com/forasna/uploads/logos/thumb_clogo_2017-08-16-20-32-01_WHBFR4f1bOxtlAflQ0eoKgXX.jpg"
              name={section}
              //   navigation={navigation}
              heartIconName={"cards-heart-outline"}
              heartIconColor={"black"}
            />
          </>
        )}
        {section == "Restaurant" && (
          <>
            <ComponentInfo
              uri="https://i.pinimg.com/736x/c7/84/67/c78467db9ff497393cb548a48f02d451.jpg"
              name={Search}
              // navigation={navigation}
              heartIconName={"cards-heart-outline"}
              heartIconColor={"black"}
            />
            <ComponentInfo
              uri="https://images.deliveryhero.io/image/talabat/restaurants/Hardees_Logo_V_TM_-__636675128493827664.jpg?width=300"
              name={section}
              //  navigation={navigation}
              heartIconName={"cards-heart-outline"}
              heartIconColor={"black"}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
