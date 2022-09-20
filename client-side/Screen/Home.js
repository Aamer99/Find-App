import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import HomeHeader from "../Components/Home/Home-Header";
import SearchBar from "../Components/Home/SearchBar";
import ComponentInfo from "../Components/Home/ComponentInfo";
import { Divider } from "react-native-elements";
import BottpmTap from "../Components/TapBar";
import axios from "axios";
import Coffe from "../Components/Home/coffe";
import Place from "../Components/Home/Place";
import Categorise from "../Components/Home/Categorise";
function Home({ route, navigation }) {
  const [Search, setSearch] = useState([]);
  const [categorise, setCaegorise] = useState([]);
  const [showByCategorise, setShowByCategorise] = useState(false);
  const [section, setSection] = useState("Coffe");
  const [showSearchResualt, setShowSearchResualt] = useState(false);

  const [enableBtnSearch, setenableBtnSearch] = useState(true);
  const [searchTerm, SetSearchTerm] = useState("");
  const userCity = route.params.userCity;
  const [data, setData] = useState([]);
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
    };

    auth();
  });

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, top: 30 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HomeHeader
          SectionHandler={setSection}
          setenableBtnSearch={setenableBtnSearch}
          setShowSearchResualt={setShowSearchResualt}
          SetSearch={SetSearchTerm}
        />
        <SearchBar
          SearchHandler={setSearch}
          section={section}
          setShowSearchResualt={setShowSearchResualt}
          setenableBtnSearch={setenableBtnSearch}
          enableBtnSearch={enableBtnSearch}
          Search={searchTerm}
          SetSearch={SetSearchTerm}
          userCity={userCity}
        />
      </View>
      {section == "Restaurant" && (
        <Categorise
          setCaegorise={setCaegorise}
          setShowByCategorise={setShowByCategorise}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {section == "Coffe" && (
          <Coffe
            Search={Search}
            showSearch={showSearchResualt}
            navigation={navigation}
            userCity={userCity}
            placeType={section}
            setData={setData}
            data={data}
          />
        )}
        {section == "Restaurant" && (
          <Place
            Search={Search}
            showSearch={showSearchResualt}
            navigation={navigation}
            userCity={userCity}
            data={data}
            setData={setData}
            categorise={categorise}
            showByCategorise={showByCategorise}
            placeType={section}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(Home);
