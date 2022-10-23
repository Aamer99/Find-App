import { View, SafeAreaView, ScrollView, AsyncStorage } from "react-native";
import React, { memo, useEffect, useState } from "react";
import HomeHeader from "../Components/Home/Home-Header";
import SearchBar from "../Components/Home/SearchBar";

import Coffee from "../Components/Home/coffee";
import Place from "../Components/Home/Place";
import Categories from "../Components/Home/Categories";
function Home({ route, navigation }) {
  const [Search, setSearch] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showByCategories, setShowByCategories] = useState(false);
  const [section, setSection] = useState("Coffee");
  const [showSearchResult, setShowSearchResult] = useState(false);

  const [enableBtnSearch, setEnableBtnSearch] = useState(true);
  const [searchTerm, SetSearchTerm] = useState("");
  const userCity = route.params.userCity;
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, top: 30 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HomeHeader
          SectionHandler={setSection}
          setEnableBtnSearch={setEnableBtnSearch}
          setShowSearchResult={setShowSearchResult}
          SetSearch={SetSearchTerm}
        />
        <SearchBar
          SearchHandler={setSearch}
          section={section}
          setShowSearchResult={setShowSearchResult}
          setEnableBtnSearch={setEnableBtnSearch}
          enableBtnSearch={enableBtnSearch}
          Search={searchTerm}
          SetSearch={SetSearchTerm}
          userCity={userCity}
        />
      </View>
      {section == "Restaurant" && (
        <Categories
          setCategories={setCategories}
          setShowByCategories={setShowByCategories}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        {section == "Coffee" && (
          <Place
            Search={Search}
            showSearch={showSearchResult}
            navigation={navigation}
            userCity={userCity}
            placeType={section}
            // setData={setData}
            // data={data}
          />
        )}
        {section == "Restaurant" && (
          <Place
            Search={Search}
            showSearch={showSearchResult}
            navigation={navigation}
            userCity={userCity}
            // data={data}
            // setData={setData}
            categories={categories}
            showByCategories={showByCategories}
            placeType={section}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(Home);
