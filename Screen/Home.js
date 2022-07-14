import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HomeHeader from "../Components/Home-Header";
import SearchBar from "../Components/SearchBar";
import ComponentInfo from "../Components/ComponentInfo";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HomeHeader />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ComponentInfo
          uri="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/131451090/original/fb546458e8dd77ff0c6ee43abed68c8c8a94fdf7/do-a-creative-restaurant-logo.jpg"
          name="MOGA"
        />
        <ComponentInfo
          uri="https://s3-eu-west-1.amazonaws.com/forasna/uploads/logos/thumb_clogo_2017-08-16-20-32-01_WHBFR4f1bOxtlAflQ0eoKgXX.jpg"
          name="Zack's"
        />
        <ComponentInfo
          uri="https://i.pinimg.com/736x/c7/84/67/c78467db9ff497393cb548a48f02d451.jpg"
          name="Mcdonalds"
        />
        <ComponentInfo
          uri="https://images.deliveryhero.io/image/talabat/restaurants/Hardees_Logo_V_TM_-__636675128493827664.jpg?width=300"
          name="hardee's"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
